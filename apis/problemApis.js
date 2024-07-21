const axiosInstance = require("../config/axiosInstance");
const serverConfig = require("../config/serverConfig");

const PROBLEM_ADIMIN_REST_URI = `${serverConfig.PROBLEM_SERVICE_URL}/api/v1`;

async function fetchProblemDetailById(problemId) {
    try {
        const uri = `${PROBLEM_ADIMIN_REST_URI}/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        return response.data;
    } catch (err) {
       throw err;
    }
}

module.exports = fetchProblemDetailById