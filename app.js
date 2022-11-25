const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req,res){
  const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();

  res.render("home",{toDate:n,toTime:time});
});











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
