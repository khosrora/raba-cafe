const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "وارد کردن نام کاربری الزامی است"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "وارد کردن پست الکترونیک الزامی است"],
    },
    phone: {
        type: String,
        required: [true, "وارد کردن شماره همراه الزامی است"],
    },
    password: {
        type: String,
        required: [true, "وارد کردن کلمه عبور الزامی است"],
    },
    admin: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema)