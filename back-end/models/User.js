const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require('passport');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true }, 
    password: String,
    provider: String
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});


const UserModel = mongoose.model("User", UserSchema);

module.exports=UserModel;