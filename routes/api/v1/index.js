const StatusCodes = require('http-status-codes');


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
}

module.exports = v1Router;