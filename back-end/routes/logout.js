var express = require('express');
const passport = require("passport");
const User = require('../models/User');

var router = express.Router();


router.post("/Logout",(req,res)=>{
    req.logOut(()=>{
        console.log("logged Out")
        
    })
    console.log(req.isAuthenticated())
    res.json({})
})



module.exports = router;