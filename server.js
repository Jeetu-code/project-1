const express = require("express");
const app = express();

app.get("/",(res,req)=>{
res.send("hello world");
});

app.listen(3000,()=>{console.log("Port listening at port 3000");});
