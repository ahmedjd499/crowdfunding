

const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/fundastic').then(
    ()=>{
        console.log('connected')
    }
).catch((err)=>{console.log(err)})


module.exports=mongoose 