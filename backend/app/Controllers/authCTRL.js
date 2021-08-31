const User = require('../model/UserMODEL');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { find, findOne } = require('../model/UserMODEL');



const authCTRL = {
    register: async (req, res) => {
        try {
            const { username, email, phone, password } = req.body;

            // !USER FIND
            const userEmail = await User.findOne({ email })
            if (userEmail) return res.status(400).json({ msg: 'پست الکترونیک شما ثبت شده است' });
            const userPhone = await User.findOne({ phone })
            if (userPhone) return res.status(400).json({ msg: "شماره همراه شما ثبت شده است" })

            // ! HASHING PASSWORD
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt)
            // !Create User
            const newUser = await User({
                username, password: hashPassword, email, phone
            })
            // !save User
            await newUser.save();

            // !sms send 
            //* with kave negar

            res.json({ msg: "ثبت نام شما با موفقیت به اتمام رسید" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            // !FIND USER
            const user = await User.findOne({ username });
            if (!user) return res.status(400).json({ msg: "شما ثبت نام نکرده اید" })
            // !password Check
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ msg: "کلمه عبور شما اشتباه است" })
            // !send jsonweb Token
            const token = createAccessToken({
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone
            })
            res.json({ token })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" })
}



module.exports = authCTRL;