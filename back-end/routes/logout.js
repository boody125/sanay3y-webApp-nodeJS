var express = require('express');
const passport = require("passport");
const User = require('../models/User');

var router = express.Router();


router.post("/Logout",(req,res)=>{
    console.log(req.isAuthenticated())
    req.logOut(()=>{
        console.log("logged Out")
        res.json(req.isAuthenticated())
    })
    
    
})



module.exports = router;