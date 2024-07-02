const fetchProblemDetailById = require("../apis/problemApis");
const InternalServerError = require("../error/InternalServerError");
const SubmissionCreationError = require("../error/submissionCreationError");
const addSubmissionQueue = require("../producer/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async createSubmissionProblem(submissionPayload) {
        try {
            // Step 1 --> first fetching the problem Details From Problem Admin Service with respect to the given problemId.
            const problemResponse = await fetchProblemDetailById(submissionPayload.problemId);
            if (!problemResponse) {
                throw new SubmissionCreationError(`Failed to create a submission in the repository ${problemResponse}`);
            }

            // Step 2 --> Find the correct code Stubs for the given particular language since the problemResponse contains the codeStubs of every language.
            const languageCodeStub = problemResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

            console.log("Language Code Stub is ", languageCodeStub);

            // Step 3 --> Appending the startSnippedCode and endSnippet code in the submissionPayload.
            submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;
            console.log("Language Code Stub is ", submissionPayload.code);


            // Step 4 --> now Making a submission in the SubmissionRepository
            const submissionResponse = await this.submissionRepository.createSubmissionProblem(submissionPayload);
            console.log("submissionResponse Code Response is ", submissionResponse);

            if (!submissionResponse) {
                throw new SubmissionCreationError("Submission Response is coming as null", submissionResponse);
            }

            // step 5 --> Now preparing the data to be send to the producer.
            const submissionPayloadData = {
                [submissionResponse._id]: {
                    code: submissionPayload.code,
                    language: submissionPayload.language,
                    testCase: problemResponse.data.testCases[0].input,
                    outputCase: problemResponse.data.testCases[0].output
                }
            }
            console.log("Printing the submissionPayloadData ", submissionPayloadData);
            // Step t --> now Making a submission in the queue so that worker can consume it.
            const queueResponse = await addSubmissionQueue(submissionPayloadData);
            if (!queueResponse) {
                throw new InternalServerError("Queue Response is coming as null", queueResponse);
            }
            return {
                queueResponse: queueResponse,
                submissionResponse: submissionResponse
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SubmissionService;