const constants = require('../constants');
const submissionQueue = require('./../queues/submissionQueue');


async function addSubmissionQueue(payload) {
    await submissionQueue.add(constants.SUBMISSION_JOB, payload);
    console.log("Successfully added the submission data into the submission-queue");
}

module.exports = addSubmissionQueue;
