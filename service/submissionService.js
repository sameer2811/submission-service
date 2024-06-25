const InternalServerError = require("../error/InternalServerError");
const addSubmissionQueue = require("../producer/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async createSubmissionProblem(submissionPayload) {
        try {
            const submissionResponse = await this.submissionRepository.createSubmissionProblem(submissionPayload);
            if (!submissionResponse) {
                throw new InternalServerError("Submission Response is coming as null", submissionResponse);
            }
            const queueResponse = await addSubmissionQueue(submissionPayload);
            if (!queueResponse) {
                throw new InternalServerError("Queue Response is coming as null", queueResponse);
            }
            return {
                queueResponse: queueResponse,
                submissionResponse: submissionResponse
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SubmissionService;