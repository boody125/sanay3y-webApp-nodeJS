//Express!!
const express= require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const User =require('./models/User')
const login=require('./routes/login')
const register=require('./routes/register')
const logout=require('./routes/logout')
require('dotenv').config();
const app = express();

app.use(cors({
  credentials:true,
  origin:"http://localhost:3000",
  
}));
app.use(express.json());
app.use(session({
  httpOnly:false,
  secret:"SomeValue",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.MONGO_URL
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} );


app.use(register)

app.use(login)

app.use(logout)


app.listen(8080, ()=>{
  console.log('Server 8080 is running up !!')
})


// boody Ub9m75NO3KxiZlVS