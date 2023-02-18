const mongoose =require('mongoose')

const User =mongoose.model('User',{
    firstname :{
        type: String
    },
    lastname :{
        type: String
    },
    email :{
        type: String
    },
    type :{
        type: String
    },
    password :{
        type: String
    },
    phone :{
        type: String
    },
    address :{
        type: String
    },
    

})

module.exports=User