const SubmissionModel = require("../models/submissionModel");

class SubmissionRepository {
    constructor() {
        this.submissionModel = SubmissionModel;
    }

    async createSubmissionProblem(submissionPayload) {
        const response = this.submissionModel.create(submissionPayload);
        return response;
    }
}

module.exports = SubmissionRepository;