
const express=require('express')


const router= express.Router(); 
const project=require('../models/project')


router.post('/newProject',async (req,res)=>{

try {
    
    const    data=req.body
    const prj=new project(data)
    await prj.save()
    res.status(200).send('success')

} catch (error) {
    res.send(error)
}
})

router.get('/getByUser/:email',async(req,res)=>{
        const email=req.params.email

    try {
        const projects=await project.find({creator:email})
        console.log(projects)
        
        res.status(200).send(projects)
    } catch (error) {
        res.send(error)
    }
})

router.get('/getall',async(req,res)=>{

    try {
        const projects=await project.find()
        res.status(200).send(projects)
    } catch (error) {
        res.send(error)
    }
})

module.exports=router