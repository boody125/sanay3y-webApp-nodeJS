var express = require('express');
const passport = require("passport");
const User = require('../models/User');


var router = express.Router();

router.post("/Register", async function(req, res){

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

  module.exports = router;