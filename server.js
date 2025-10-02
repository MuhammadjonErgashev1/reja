

const http = require("http");
const mongodb = require("mongodb");

let db;
let connectionString ="mongodb+srv://Muhammadjon:muhamadjon1%40@cluster0.xkhhdev.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            console.log('Error on database connection:', error);
        } else {
            const PORT = 4005
            console.log('Mongodb Database:connected successfully');
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            server.listen(PORT, function () {
                console.log(`Server is running successfully on port:  ${PORT}, http://localhost:${PORT}`);
            });
        }
    })