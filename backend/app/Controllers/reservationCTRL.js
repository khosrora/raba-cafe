const Reservation = require('../model/ReservationMODEL');
const shortid = require('shortid');


const reservationCTRL = {
    createReservation: async (req, res) => {
        try {
            const { username, phone, phone2, number, desc } = req.body;
            const reservCode = shortid.generate();
            // ! create Reservation
            const newReservation = await Reservation({
                username, phone, phone2, number, desc, reservCode
            })
            // !save Reservation
            await newReservation.save()

            // !send SMS
            // * with Kavenegar

            // !Send Message
            res.status(200).json({ msg: "پیام شما جهت رزرو دریافت شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getReservation: async (req, res) => {
        try {
            // ! GET ALL RESERVATION
            const reservations = await Reservation.find();
            res.status(200).json({ reservations })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteReservation: async (req, res) => {
        try {
            const id = req.params.id;
            //! GET RESERVATION 
            await Reservation.findByIdAndRemove(id);
            // ! Send SMS
            res.status(200).json({ msg: "رزرو مورد نظر حذف شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}




module.exports = reservationCTRL;