
const express=require('express')

require('./connect')
const userRoute=require('./routes/userRoute')
const projectRoute=require('./routes/projectRoute')

const app = express();
app.use(express.json( ))
var cors = require('cors');
app.use(cors());

//http://localhost:80/
app.use('/project',projectRoute)
app.use('/user',userRoute) 


app.listen(80,()=>{console.log('server works')})