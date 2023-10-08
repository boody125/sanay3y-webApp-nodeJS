var express = require('express');
const passport = require("passport");
const jwt=require('jsonwebtoken')
const User = require('../models/User');
require('dotenv').config();

var router = express.Router();

router.get('/profile',(req,res)=>{
    const {token}= req.cookies;
    jwt.verify(token,process.env.JWTSECRET,{},(err, user)=>{
        res.json(user)
    })
})

module.exports = router;