const express=require('express');
var server =express();

var middleware=express.static('public');
server.use(middleware);
server.get("/",(req, res)=>{
    res.sendFile("index.html");
})
server.listen(9000);
console.log("server is listening on port 9000");