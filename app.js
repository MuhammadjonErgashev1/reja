console.log("web server qurishni boshlash");

const { urlencoded } = require('body-parser');
const express=require('express')
const app=express();


//mongodb chaqirish

const db = require("./server").db()
const mongodb=require('mongodb')
//kirish code
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//2 session code
//3 views code
app.set("views", "views")// bu kerakli papkani qayerdaligini qidiradi
app.set("view engine", "ejs") //bu esa qidirilgan va ishlatiladigon file qaysi tipdaligini ko'rsatib beradi
//biz ejs faylini backenda yasab browser qismiga jo'natishni sozlab oldik. va kerakli faylni avtomatik render qilish uchun ishlatiladi
//routing code


app.post('/create-item', (req,res)=>{
    console.log(req.body)
    const new_reja=req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err,data)=>{
        console.log(data.ops)
        res.json(data.ops[0]);
    })
  
})

app.post("/delete-item", (req,res)=>{
    const id=req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id) }, function(err,data){
        res.json({state: "success"})
    })
    
});



app.get('/', (req,res)=>{
    db.collection("plans")
    .find()
    .toArray((err,data)=>{
        if(err){
            console.log(err);
            console.log("something went wrong")
        }
        else{
            console.log(data)
            res.render("reja", {items: data})
        }
    })
    
})

module.exports = app;