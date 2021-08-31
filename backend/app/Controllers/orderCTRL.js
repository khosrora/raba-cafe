const Order = require('../model/OrderMODEL');
const { unlink } = require('fs/promises');


const orderCTRL = {
    createOrder: async (req, res) => {
        try {
            const { name, price, desc, category } = req.body;
            // !GET IMAGE
            const images = `${req.file.path}`;
            // !ORder Find
            const order = await Order.findOne({ name })
            if (order) {
                await unlink(images)
                return res.status(400).json({ msg: "این سفارش قبلا ثبت شده است" })
            } else {
                // ! CREATE NEW ORDER
                const newOrder = new Order({
                    name, price, desc, images, category
                })
                // ! SAVE ORDER
                await newOrder.save()

                // ! SEND MESSAGE
                res.status(200).json({
                    msg: "سفارش با موفقیت ثبت شد"
                })
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getOrders: async (req, res) => {
        try {
            // !GET All ORDERS
            const orders = await Order.find();
            // !SEND ORDERS
            res.status(200).json({ orders })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    editOrder: async (req, res) => {
        try {
            const { name, price, desc, category } = req.body;
            // ! find Order
            const id = req.params.id;
            const newOrder = await Order.findByIdAndUpdate(id, {
                name, price, desc, category
            });
            // ! order save 
            await newOrder.save();
            // ! send message   
            res.status(200).json({ msg: "سفارش با موفقیت ویرایش شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const id = req.params.id;
            //! find order AND DELETE WITH IMAGE
            const order = await Order.findByIdAndRemove(id)
            await unlink(order.images)
            // ! send message   
            res.status(200).json({ msg: "سفارش با موفقیت حذف شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = orderCTRL;