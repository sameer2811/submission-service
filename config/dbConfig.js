const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');


async function connectToDataBase() {
    try {
        if (serverConfig.NODE_ENV === "development") {
            console.log("Coming here inside the dev mode ");
            await mongoose.connect(serverConfig.ATLAS_DB_URL);
        } else {
            console.log("Going here inside the prod mode");
        }
    } catch (e) {
        console.log("Inside the exception something went wrong ", e);
    }
}

module.exports = connectToDataBase;