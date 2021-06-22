const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

userSchema.plugin(passportLocalMongoose);//This is going to automatically add username,hased-password and Salt Value to the Schema.

const User =  mongoose.model('User',userSchema);
module.exports = User;
