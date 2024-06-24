const addSubmissionQueue = require("../producer/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async createSubmissionProblem(submissionPayload) {
        // TODO : Add the error Handling here;
        const submissionResponse = await this.submissionRepository.createSubmissionProblem(submissionPayload);
        const queueReponse = await addSubmissionQueue(submissionPayload)
        return {
            queueReponse: queueReponse,
            submissionResponse: submissionResponse
        };
    }
}

module.exports = SubmissionService;