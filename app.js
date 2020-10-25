const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const ejs=require('ejs');
require("dotenv").config();
let User = require("./models/user.model");
const { db } = require('./models/user.model');

const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to MONGO");
});
var message = "";
var logU = false;
var logA = false;



app.get('/',(req,res)=>{
    res.render('landing');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/index',(req,res)=>{
    res.render('index');
})

app.get('/premium',(req,res)=>{
    res.render('premium');
})

app.get('/Pro',(req,res)=>{
    res.render('Pro');
})

app.get('/starter',(req,res)=>{
    res.render('starter');
})

app.get('/paymente',(req,res)=>{
    res.render('paymente');
})

app.get('/thankyou',(req,res)=>{
    res.render('thankyou');
})
app.post("/signup",(req,res)=>{
    var first_name=req.body.firstname;
    var last_name=req.body.lastname;
    var username=req.body.username;
    var password=req.body.password;
    var data = { 
        "first_name": first_name, 
        "last_name":last_name, 
        "username":username, 
        "password":password 
    } 
    console.log(data);
    db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
        console.log(data);
              
    }); 
}) 

app.post("/login", function (req, res) {
    User.create(req.body.user, function (err, user) {
      console.log(user.first_name);
      try {
        console.log(user);
        logU = true;
        name = user.first_name;
      } catch (err) {
        console.log(err);
      }
    });
  });

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });