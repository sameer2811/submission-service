const {
  Worker
} = require('bullmq');
const {
  EVALUATION_JOB
} = require('../constants');
const redisConnection = require("../config/redisConfig");
const postSubmissionResponse = require('../apis/submissionResponse');

function initalizeSubmissionWorker(queueName) {
  return new Worker(
    queueName,
    async function (job) {
      if (job.name == EVALUATION_JOB) {
        const evaluationJobData = job.data;
        postSubmissionResponse({
          userId: evaluationJobData.userId,
          submissionPayload: evaluationJobData.response
        });
      }
    }, {
      connection: redisConnection,
    }
  );
}

module.exports = initalizeSubmissionWorker;