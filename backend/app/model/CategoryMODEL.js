const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "وارد کردن نام عنوان الزامی است"],
        unique: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Category', categorySchema)