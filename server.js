console.log("web serverni qurish");
const express=require('express');
const app=express();
const http=require('http');
const fs=require("fs");


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
    res.end("hello world  me");
});

app.get("/hello", function(req,res){
   res.send("hali bu boshlanishi");
});

app.get("/gift", function(req,res){
    res.send("bu yer sovgalar sahifasi bo'lishi mumkun edi");
});

const server=http.createServer(app);
let Port=3000;
server.listen(Port,function(){
    console.log(`server ishga tushdi ${Port}`);
});