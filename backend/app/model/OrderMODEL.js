const mongoose = require('mongoose');



const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "نام سفارش الزامی است"]
    },
    price: {
        type: String,
        required: [true, "قیمت سفارش الزامی است"]
    },
    desc: {
        type: String,
        required: [true, "توضیحات سفارش الزامی است"]
    },
    images: {
        type: String,
        required: [true, "عکس سفارش الزامی است"]
    },
    category: {
        type: String,
        required: [true, "دسته بندی سفارش الزامی است"]
    }
}, { timestamps: true })


module.exports = mongoose.model("Order", orderSchema)