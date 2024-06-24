require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app=express()
const PORT=process.env.PORT
const transact=require('./routes/transactions')
const userRoutes=require('./routes/users')
const authRoutes=require('./routes/auth')
//middlewares
app.use(express.json())
app.use(cors())
app.use('/transactions',transact)
app.use('/Register',userRoutes)
app.use('/Login',authRoutes)


db()
app.listen(PORT,()=>{
    
    console.log(`Server listening on PORT ${PORT}`)
})

