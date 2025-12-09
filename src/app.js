const express = require("express");

const app = express();

app.use("/hello",(req,res)=>{
    res.send("hello from the server");
})

app.use("/test",(req, res)=>{
    res.send("test test teestttt!!")
})

app.get("/neighbour",(req, res)=>{
    res.send("the neighbour is saying hello to you sourabh");
})


app.listen(3000,()=>{
    console.log("server is listening")
})