const express = require("express");

const app = express();

app.use("/hello",(req,res)=>{
    res.send("hello from the server");
})

app.get("/test",(req, res)=>{
    res.send({firstname:"test", lastName:"sourabh"})
})

app.post("/test",(req,res)=>{
    // DB is created
    res.send({firstName:"Sahil",LastName:"sahita"})
})

app.delete("/test",(req,res)=>{
    res.send("data deleted successfully!")
})

app.put("/test",(req,res)=>{
    res.send("data is updated and replaced sucessfully!")
})

app.get("/neighbour",(req, res)=>{
    res.send("the neighbour is saying hello to you sourabh");
})

app.patch("/test",(req,res)=>{
    res.send("data is patched and bugs are fixed successfully")
})


app.listen(3000,()=>{
    console.log("server is listening")
})