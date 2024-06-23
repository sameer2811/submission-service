const v1Router = require("./v1");

async function apiRouter(fastify, options) {
    fastify.register(v1Router, {
        prefix: "/v1"
    });
}

module.exports = apiRouter;