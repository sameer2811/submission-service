const constants = require('../constants');
const submissionQueue = require('./../queues/submissionQueue');


async function addSubmissionQueue(payload) {
    const response = await submissionQueue.add(constants.SUBMISSION_JOB, payload);
    console.log("Successfully added the submission data into the submission-queue ", response);
    return response;
}

module.exports = addSubmissionQueue;
