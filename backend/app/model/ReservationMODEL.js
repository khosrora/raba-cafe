const mongoose = require('mongoose');



const reservationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "نام کاربری الزامی است"]
    },
    phone: {
        type: String,
        required: [true, " شماره تماس اول الزامی است"]
    },
    phone2: {
        type: String,
        required: [true, " شماره تماس اول الزامی است"]
    },
    number: {
        type: Number,
        required: [true, " تعداد افراد الزامی است"]
    },
    desc: {
        type: String,
    },
    reservCode: {
        type: String,
        required: [true, "   رزرو کد الزامی است"]
    }
}, { timestamps: true })


module.exports = mongoose.model("Reservation", reservationSchema)