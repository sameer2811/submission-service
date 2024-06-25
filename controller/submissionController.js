const StatusCodes = require("http-status-codes");

// TODO : Add Validation Layer
async function createSubmissionControlller(req, res) {
    const {
        SubmissionService
    } = this;

    try {
        const submissionResponse = SubmissionService.createSubmissionProblem(req.body);
        return res.status(StatusCodes.OK).send({
            error: {},
            success: true,
            data: submissionResponse,
            msg: "Created Submission Successfully!!"
        });
    } catch (err) {
        // Calling of next function needs to be done here.
        // next(err);
    }
}

module.exports = {
    createSubmissionControlller
}