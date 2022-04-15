var express = require("express");
var app = express();
var fs = require("fs");
const send = require("send");

app.use(express.static("public"));
app.get("/",function(req,res){
    var content = fs.readFileSync("index.html");
     res.send(content.toString());

     res.end();
    
});
app.get("/contact",function(req,res){
      res.send("contact page")
})

app.listen(8081,function(){
    console.log("server is found in https://localhost:8081");
});