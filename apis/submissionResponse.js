const axiosInstance = require("../config/axiosInstance");
const serverConfig = require("../config/serverConfig");

const WEB_SOCKET_SERVICE_URL = `${serverConfig.WEB_SOCKET_SERVICE_URL}/send-payload`;

async function postSubmissionResponse(bodyParams) {
    try {
        const response = await axiosInstance.post(WEB_SOCKET_SERVICE_URL, bodyParams);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

module.exports = postSubmissionResponse