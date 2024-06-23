const fp = require('fastify-plugin');
const apiRouter = require('./routes/api');

async function app(fastify , options) {
    fastify.register(apiRouter,{
        prefix : "/api"
    })
}

module.exports = fp(app);