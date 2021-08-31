require('dotenv').config({
    path: "./config/.env"
});
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/DBconfig');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// !ROUTES
app.use("/auth", require('./app/Routes/authRouter'))
app.use("/categories", require('./app/Routes/categoriesRouter'))
app.use("/reservation", require('./app/Routes/reservationRouter'))
app.use("/order", require('./app/Routes/ordersRouter'))


// !CONNECT TO MONGO DB
connectDB()
// !SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is Runnig on port ${PORT}`);
})