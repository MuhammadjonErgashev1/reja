console.log("web serverni qurish");
const express=require('express');
const app=express();
const res=require("express/lib/response")
const fs=require("fs")

const { getDb } = require('./server');
let user;
fs.readFile("database/user.json","utf8", (err,data)=>{
    if(err){
        console.log("Error:", err);
    }
    else{
        user=JSON.parse(data);
    };
});
//MongoDb connect


//1 kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//2 Session
//3 views code
app.set("views","views");
app.set("view engine","ejs");
//4 rauting code
app.get("/",function(req,res){
    res.render("reja");
});
app.post("/create-item", (req,res)=>{
    console.log(req.body);
    res.json({test: "succes"})
});

app.get('/author', (req,res)=>{
    res.render("author", {user: user})
});
module.exports = app;
