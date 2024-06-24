const StatusCodes = require("http-status-codes");

// TODO : Add Validation Layer
async function createSubmissionControlller(req, res) {
    const {
        SubmissionService
    } = this;

    const submissionResponse = SubmissionService.createSubmissionProblem(req.body);
    return res.status(StatusCodes.OK).json({
        error: {},
        success: true,
        data: submissionResponse,
        msg: "Created Submission Successfully!!"
    })
}


module.exports = {
    createSubmissionControlller
}