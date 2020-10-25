const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');

const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });