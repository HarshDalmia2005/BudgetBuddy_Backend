require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app=express()
const PORT=process.env.PORT||6010
const transact=require('./routes/transactions')
const userRoutes=require('./routes/users')
const authRoutes=require('./routes/auth')
//middlewares
app.use(express.json())
app.use(cors())
app.use('/transactions',transact)
app.use('/Register',userRoutes)
app.use('/Login',authRoutes)

app.get('/Hello',(req,res)=>{
    res.send("Hello World")
})

db()
app.listen(PORT,()=>{ 
    console.log(`Server listening on PORT ${PORT}`)
})

