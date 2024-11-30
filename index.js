const http=require("http");
const express=require("express");
const exp = require("constants");
const path = require("path");
const {Server}=require("socket.io");


const app=express();
const server=http.createServer(app);
const io=new Server(server);
 
app.use(express.static(path.resolve("./public"))); 

//socket.io
io.on("connection",(Socket)=>{
    console.log("New user Connect",Socket.id);
})

app.get("/",(req,res)=>{
    return res.sendFile("./public/index.html")  
})

app.listen(9000,()=>console.log("Server started At- http://localhost:9000"));