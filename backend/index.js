const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/database');
const authRoutes = require('./routes/authRoutes.js')

const PORT = process.env.PORT || 8000;

dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)

app.use('/api/v1/auth',authRoutes);

app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is running.......",
    })
})

app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT}`);
})