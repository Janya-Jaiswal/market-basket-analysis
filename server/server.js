import express from "express";
const app=express();
app.use(express.json());


app.get("/",(request,response)=>{response.send("hello world")});
app.get("/auth",(request,response)=>{response.send("you are authenticated")});
app.get("/home",(request,response)=>{response.send("home page")});

app.listen(8080,()=>{console.log("server is running")});