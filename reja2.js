console.log("web serverni qurish");
const express=require('express');
const app=express();
const http=require('http');
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
    res.render("harid");
});
app.post("/create-item", (req,res)=>{
    console.log(req.body);
    res.json({test: "succes"})
});

const server=http.createServer(app);
let Port=3000;
server.listen(Port,function(){
    console.log(`server ishga tushdi ${Port}`);
});