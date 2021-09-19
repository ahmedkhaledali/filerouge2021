const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const userSchema = new Schema({
    googleId: String,
    fullName:{
        type:String,
       required:true,
       trim:true,
       index:true,
       lowercase:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        
    },

    adress:{
        type:String,
        required:true,
        trim:true,
        
    },
    email:{
         type:String, unique:true, 
         trim:true,
         lowercase:true
        
    },
    
    password:{
        type:String,
        trim:true,
        
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }
    

},{timestamps:true})


module.exports = mongoose.model('users',userSchema)
