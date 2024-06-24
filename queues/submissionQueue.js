const {
    Queue
} = require('bullmq');

const ConstantsConfig = require('./../constants');
const redisConnection = require('../config/redisConfig');



module.exports = new Queue(ConstantsConfig.SUBMISSION_QUEUE, {
    connection: redisConnection
});