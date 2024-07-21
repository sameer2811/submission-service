const BaseError = require("./error/BaseError");
const {
    StatusCodes
} = require('http-status-codes');

function errorHandler(err, request, reply) {
    if (err instanceof BaseError) {
        reply.status(err.statusCode).send({
            success: false,
            message: err.msgDescription,
            error: err.msgDetails,
            data: {} // Because this is an exception so no data is going to be provided.
        });
    } else {
        let data = err;
        if (err.response && err.response.data) {
            data = err.response.data;
        }
        reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "something went wrong!",
            error: data, // Ensure `error.message` is used if available
            data: {} // Because this is an exception so no data is going to be provided.
        });
    }
}

module.exports = errorHandler;
