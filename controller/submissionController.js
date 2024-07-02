const {
    error
} = require("console");
const StatusCodes = require("http-status-codes");

// TODO : Add Validation Layer
async function createSubmissionControlller(req, res) {
    const {
        SubmissionService
    } = this;

    try {
        const submissionResponse = await SubmissionService.createSubmissionProblem(req.body);
        console.log("Submission response  is " , submissionResponse);
        return res.status(StatusCodes.OK).send({
            error: {},
            success: true,
            data: submissionResponse,
            msg: "Created Submission Successfully!!"
        });
    } catch (err) {
        console.log("Inside the catch", err);
        // next(err);
    }
}

module.exports = {
    createSubmissionControlller
}