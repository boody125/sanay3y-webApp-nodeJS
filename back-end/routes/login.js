var express = require('express');
const passport = require("passport");
const jwt=require('jsonwebtoken')
const User = require('../models/User');
require('dotenv').config();
var router = express.Router();


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/login', passport.authenticate('local'), function(req, res) {
    const {firstname,lastname}=res.req.user
    if (req.isAuthenticated()){
      jwt.sign({firstname:firstname,lastname:lastname,id:JSON.stringify(req.user._id)},process.env.JWTSECRET,{},(err,token)=>{
        
        if (err) throw err;
        res.cookie('token',token).json('passok')
        console.log("cookie delivered")
      })
      
    }else{
      res.json("pass not ok")
    }
  });


module.exports = router;






