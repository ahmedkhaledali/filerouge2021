
const express =require('express')
const app = express()
const db = require('./Config/db')
db();
const cors= require('cors')
app.use(cors())
const body=require('body-parser')
app.use(express.json())




const user = require('./Router/UserRoute')
app.use('/app',user)
const admin = require('./Router/adminRoute')
app.use('/app',admin)

//Admin
// const Users=require ('./Router/UserRoute')
// app.use("/app", Admin);

//chien
const Chiens=require('./Router/ChienRoute')
app.use("/app",Chiens)

//User
// const Users=require ('./Router/UserRoute')
// app.use("/app", Users);


app.listen('5003',()=>{
    console.log('server run')
})