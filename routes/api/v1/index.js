const StatusCodes = require('http-status-codes');
const {
    createSubmissionControlller
} = require('../../../controller/submissionController');


async function v1Router(fastify, options) {
    fastify.get("/ping", async function (req, res) {
        return res.status(StatusCodes.OK).send({
            "ping": "pong"
        })
    });

    fastify.post("/submission", createSubmissionControlller);
}

module.exports = v1Router;