var express = require("express"),
    app = express(),
    path = require("path");


app.use(express.static(path.join(__dirname,'/client')));

app.get("/",function (req,res) {
    res.sendFile("/index.html");
});

app.listen(5000,function () {
    console.log("Server is listening at: 5000");
});