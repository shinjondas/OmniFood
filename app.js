const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const ejs=require('ejs');
require("dotenv").config();
const User = require("./models/user.model"),
      Order=require("./models/order.model"),
    Feedback = require("./models/feedback.model");

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

const visited=[];

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

app.get('/thankfeed',(req,res)=>{
  res.render('thankfeed');
})

app.get('/thankyou',(req,res)=>{
    res.render('thankyou');
})
app.post("/login", function (req, res) {
    User.create(req.body.user, function (err, user) {
      console.log(user);
      try {
        console.log(user);
        logU = true;
        name = user.first_name;
        res.redirect("/index");
      } catch (err) {
        console.log(err);
      }
    });
  });
  app.post("/index", function (req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {
      // console.log(err);
      // console.log(user);
      try {
        if (user.password == req.body.password) {
          logU = true;
          message = "";
          res.redirect("/index");
        } else {
          res.redirect("/login");
          message = "Invalid Password";
          console.log(message);
        }
      } catch (err) {
        res.redirect("/login");
        message = "Invalid Username";
        console.log(message);
      }
    });
  });
  app.post('/thankyou',(req,res)=>{
    Order.create(req.body.user, function (err, user) {
      console.log(user);
      try {
        console.log(user);
        logU = true;
        name = user.name;
        res.redirect("/thankyou");
      } catch (err) {
        console.log(err);
      }
    });
  })
  app.post('/thankfeed',(req,res)=>{
    Feedback.create(req.body.user, function (err, user) {
      console.log(user.item_name);
      try {
        console.log(user);
        logU = true;
        name = user.name;
        res.redirect("/thankfeed");
      } catch (err) {
        console.log(err);
      }
    });
  })

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });