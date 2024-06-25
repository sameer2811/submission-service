const constants = require("../constants");
const BaseError = require("./BaseError");
const StatusCode = require('http-status-codes');

class BadRequestError extends BaseError {
    constructor(msgDescription, msgDetails) {
        super(constants.BAD_REQUEST, StatusCode.BAD_REQUEST, msgDescription, msgDetails);
    }
}

module.exports = BadRequestError;