const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    NODE_ENV: process.env.NODE_ENV,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    PROBELM_SERVICE_URL : process.env.PROBELM_SERVICE_URL
}
