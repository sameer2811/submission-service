const axiosInstance = require("../config/axiosInstance");
const serverConfig = require("../config/serverConfig");

const PROBLEM_ADIMIN_REST_URI = `${serverConfig.PROBELM_SERVICE_URL}/api/v1`;

async function fetchProblemDetailById(problemId) {
    try {
        const uri = `${PROBLEM_ADIMIN_REST_URI}/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log("Response from the fetch Problem Detail By Id ", response);
        return response;
    } catch (error) {
        console.log("Some Issue Came while fetching the detail of Problem with problem ID :- ", problemId);
        console.log("Here is the Error for the same ----> ", error);
    }
}

module.exports = fetchProblemDetailById