const fastifyCors = require('@fastify/cors');
const repositoryPlugin = require('./repository/repositoryPlugin');
const apiRouter = require('./routes/api');
const servicePlugin = require('./service/servicePlugin');

async function app(fastify, options) {
    await fastify.register(fastifyCors);

    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);

    await fastify.register(apiRouter, {
        prefix: "/api"
    });
}

module.exports = app;