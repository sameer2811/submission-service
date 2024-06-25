const constants = require("../constants");
const BaseError = require("./BaseError");
const StatusCode = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor(msgDescription, msgDetails) {
        super(constants.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR, msgDescription, msgDetails);
    }
}

module.exports = InternalServerError;