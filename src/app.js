//creating server in express js
const express=require('express');

const app=express();

app.listen(9988);

app.get("/user",(req,res)=>{
    res.send({firstname:"shreya",lastname:"tiwari"})
})
app.post("/user",(req,res)=>{
    res.send("data saved successfully!!!")
})
app.delete("/user",(req,res)=>{
    res.send("data deleted successfully")
})

app.use("/test",(req,res)=>{
    res.send("test page!!!")
})
app.use("/",(req,res)=>{
    res.send("hello this is my dashboard!!!")
})
