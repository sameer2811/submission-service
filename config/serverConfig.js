const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    NODE_ENV: process.env.NODE_ENV,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    PROBLEM_SERVICE_URL: process.env.PROBLEM_SERVICE_URL,
    WEB_SOCKET_SERVICE_URL: process.env.WEB_SOCKET_SERVICE_URL
}
