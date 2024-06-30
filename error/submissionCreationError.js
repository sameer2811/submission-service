const BaseError = require('./BaseError');
const {
    StatusCodes
} = require('http-status-codes')

class SubmissionCreationError extends BaseError {
    constructor(details) {
        super('SUBMISSION_CREATION_ERROR', StatusCodes.BAD_REQUEST, "Not able to create submission !!", details);
    }
}

module.exports = SubmissionCreationError;