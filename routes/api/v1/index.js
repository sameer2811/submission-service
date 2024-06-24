const StatusCodes = require('http-status-codes');
const { createSubmissionControlller } = require('../../../controller/submissionController');


async function v1Router(fastify, options) {
    fastify.get('/', async function (req, res) {
        return res.status(StatusCodes.OK).send({
            "/": "hello Sameer"
        });
    });

    fastify.get("/ping", async function (req, res) {
        return res.status(StatusCodes.OK).send({
            "ping": "pong"
        })
    });
    fastify.get("/pingg", async function (req, res) {
        return res.status(StatusCodes.OK).send({
            "ping": "pong"
        })
    });

    fastify.get("/submission" , createSubmissionControlller);


    fastify.post("/submission" , createSubmissionControlller);
}

module.exports = v1Router;