

const express=require('express')
const bcryt=require('bcrypt')

const router= express.Router(); 
const User=require('../models/user') 
const jwt=require('jsonwebtoken') 



router.post('/createUser',async (req,res)=>{
    try {
        const    data=req.body
        const user=await User.findOne({email:data.email})
        
        if(user)
        {
            res.send('email already in use')
        }else{
            const usr=new User(data)
        let salt=bcryt.genSaltSync(10)
        const cryptedPass=await bcryt.hashSync(data.password,salt)
        usr.password=cryptedPass
        
        await usr.save()
        const payload={
            _id:usr._id,
            email:usr.email,
            firstname:usr.firstname,
            lastname:usr.lastname,
            type:usr.type,
            phone:usr.phone,
            address:usr.address
        }
        var token =jwt.sign(payload,'fundastic')
        res.status(200).send({mytoken:token})
        }
        
    } catch (error) {
     res.send(error)
    }
     })
 
router.post('/login',async(req,res)=>{
   const data=req.body
   const user=await User.findOne({email:data.email})
   if(!user)
   {
        res.status(404).send('email Or password invalid')
   }else{
    var validPass=bcryt.compareSync(data.password,user.password)
    if(!validPass)
    {
        res.status(401).send('email Or password invalid')
    }else{
        const payload={
            _id:user._id,
            email:user.email,
            firstname:user.firstname,
            lastname:user.lastname,
            type:user.type,
            phone:user.phone,
            address:user.address
        }
        var token =jwt.sign(payload,'fundastic')
        res.status(200).send({mytoken:token})
    }
   }
})



 router.get('/getUser/:id',async (req,res)=>{
     
         const myid=req.params.id
         await User.findById({_id: myid}).then((user)=>{
         res.send(user)
      })
     
     .catch ((err)=>{res.send(err)})
  })
 
  router.get('/getallUsers',async(req,res)=>{
    try {
     const users=await User.find({firstname:"flen"})
     res.send(users)
    } catch (error) {
     res.send(error)
    }
 })
 
 
 
 router.delete('/delete/:id',async(req,res)=>{
     try {
         let myid= req.params
        let dusr= await User.findByIdAndDelete(
         myid )
         res.send(dusr)
     } catch (error) {
         console.log('errr')
         res.send(error)
     }
 }) 




module.exports=router