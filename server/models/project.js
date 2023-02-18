const mongoose =require('mongoose')

const project =mongoose.model('project',{
    creator :{
        type: String
    },
    pname :{
        type: String
    },
    category :{
        type: String
    },
    NeededCapital :{
        type: Number
    },
    collectedCapital :{
        type: Number
    },
    description :{
        type: String
    },
})

module.exports=project