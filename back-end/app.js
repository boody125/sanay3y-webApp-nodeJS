//Express!!
const express= require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const User =require('./models/User')
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret:"SomeValue",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.MONGO_URL
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} );


app.post("/Register", async function(req, res){

  const {firstname,lastname,email,password}=req.body
  try {
    const userRegisterDoc = await User.register({firstname:firstname,
      lastname: lastname,
      email: email,
      provider: 'local'}, password,
      passport.authenticate("local")(req, res, function(){
        //Redirect them to the HomePage
        
        console.log("Successfully Registered");
      })
    )
    res.json(userRegisterDoc)
  } 
    
  catch (error) {
      console.log(error)
      res.status(422).json(error)
      
    }
  }
);



app.post("/Login", function(req, res){
  const {email,password}=req.body

  try {
    const userLoginDoc=req.login({email: email,
      password: password},function(){
      passport.authenticate("local")(req, res, function(){
        res.json(userLoginDoc)
        console.log("Successfully Logged in");

      });
    })
  } 
  catch (error) {
    res.status(422).json(error)
  }
  
  }
);



app.listen(8080, ()=>{
  console.log('Server 8080 is running up !!')
})


// boody Ub9m75NO3KxiZlVS