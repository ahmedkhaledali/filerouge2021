const USER = require('../Models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

 module.exports={
register:async(req,res)=>{
USER.findOne({email:req.body.email})
.exec((error,user)=>{
    if(user) return  res.status(400).json({
        message:'Email already been used'
    });
    // const salt = genSaltSync(10)
    //  const hashedPassword =  bcrypt.hashSync(req.body.password);
     const password = req.body.password;
    const fullName = req.body.fullName
    const adress=req.body.adress
    const email = req.body.email
    const phone = req.body.phone

    const _user = new USER({
        fullName,
        email,phone,password,adress
    })

    _user.save((error,data) =>{
        if(error){
            return res.status(400).json({
                message:'Somthing went wrong!'
            })
        }
        if(data){
            return res.status(201).json({
                message:'User created Successfuly..!'  ,
            data          })

        }
    })
});

}, 
signIn : (req, res) => {
    USER.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        if ( user.password == req.body.password ) {
            const token = jwt.sign({_id:user._id,role:user.role,fullName:user.fullName,adress:user.adress,email:user.email,phone:user.phone},'MEARNSECRET',{expiresIn:'1h'})
            res.status(200).json({
            token 
          });
        } else {
          return res.status(400).json({
            message: "Invalid password !",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
    
  },
  getuser: async (req, res) => {
    try {
      const users = await USER.find();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  },

  suppuser: async (req, res) => {
    try {
      const users = await USER.findByIdAndDelete(req.params.id);
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  },
  putuser: async (req, res) => { 
    try {
      const users = await USER.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
      );
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  }
}