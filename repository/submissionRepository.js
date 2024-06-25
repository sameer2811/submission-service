const InternalServerError = require("../error/InternalServerError");
const SubmissionModel = require("../models/submissionModel");

class SubmissionRepository {
    constructor() {
        this.submissionModel = SubmissionModel;
    }

    async createSubmissionProblem(submissionPayload) {
        try {
            const response = this.submissionModel.create(submissionPayload);
            if (!response) {
                throw new InternalServerError("Some issue in create submission problem repository", response);
            }
            return response;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = SubmissionRepository;