const fp = require('fastify-plugin');
const SubmissionService = require("./submissionService");


async function servicePlugin(fastify, options) {
    const {
        SubmissionRepository
    } = fastify;
    fastify.decorate('SubmissionService', new SubmissionService(SubmissionRepository));
}

module.exports = fp(servicePlugin);