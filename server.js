const http = require('http');
const { MongoClient } = require("mongodb"); // MongoClient import qilamiz
const app = require("./app");

const connectionString = "mongodb+srv://Muhammadjon:muhamadjon1%40@cluster0.xkhhdev.mongodb.net/Reja";

// MongoClient yaratamiz
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// MongoDB ga ulanib, serverni ishga tushiramiz
client.connect()
.then(() => {
    console.log("✅ MongoDB connection succeeded");
    module.exports=client;

    // DB obyekti (ixtiyoriy)
    const db = client.db("Reja");

    // HTTP server yaratamiz
    const server = http.createServer(app);
    const Port = 3000;

    server.listen(Port, () => {
        console.log(`Server ishga tushdi ${Port}, http://localhost:${Port}`);
    });
})
.catch(err => {
    console.error("❌ Error on MongoDB connection:", err);
});
module.exports = { client, getDb: () => db };

