const addSubmissionQueue = require("../producer/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async createSubmissionProblem(submissionPayload) {
        // TODO : Add the error Handling here;
        const submission = await this.submissionRepository.createSubmissionProblem(submissionPayload);
        const response = await addSubmissionQueue(submissionPayload)
        return {
            queueReponse: response,
            submissionResponse: response
        };
    }
}

module.exports = SubmissionService;