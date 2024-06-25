const Fastify = require('fastify');
// files importing
const app = require('./app');
// config import
const serverConfig = require('./config/serverConfig');
const connectToDataBase = require('./config/dbConfig');

const fastifyServer = Fastify({
    logger: true
})
fastifyServer.register(app);
fastifyServer.after(function () {
    console.log("printing all the registered routes ", fastifyServer.printRoutes());
})

async function startServer() {
    fastifyServer.listen(serverConfig.PORT, async function (err) {
        if (err) {
            console.log(err);
            process.exit();
        }
        // Connect to the DataBase
        console.log("Server has started Listening at the PORT ", serverConfig.PORT);
        await connectToDataBase();
        console.log("Server has been connected to DB");

    });
}

startServer();