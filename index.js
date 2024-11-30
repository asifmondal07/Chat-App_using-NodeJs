const http=require("http");
const express=require("express");
const exp = require("constants");
const path = require("path");

const app=express();
const server=http.createServer(app);
 
app.use(express.static(path.resolve("./public"))); 

app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

app.listen(9000,()=>console.log("Server started At",9000));