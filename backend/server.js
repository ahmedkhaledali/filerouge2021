
const express =require('express')
const app = express()
const db = require('./Config/db')
db();
const cors= require('cors')
app.use(cors())
const body=require('body-parser')
app.use(express.json())



//user
const user = require('./Router/UserRoute')
app.use('/app',user)
//admin
// const admin = require('./Router/adminRoute')
// app.use('/app',admin)
//chien
const Chiens=require('./Router/ChienRoute')
app.use("/app",Chiens)
//coach
const Coachs=require('./Router/coachRoute')
app.use("/app",Coachs)
//contact
const Contacts=require('./Router/contactRoute')
app.use("/app",Contacts)

app.listen('5003',()=>{
    console.log('server run')
})