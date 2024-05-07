const express = require("express");
const app=express();
const mainRouter=require("./routes/index.js");
const cors=require("cors");

//app.use for midddlewares
app.use(cors());
app.use(express.json());//Body-parser simplifies the process of accessing this data by parsing it and making it available under the req.body property in the request object.

app.use("/api/v1",mainRouter);//if we want to create version 2 api/v2


app.listen(3000,()=>{
    console.log("Server is running at 3000");
})