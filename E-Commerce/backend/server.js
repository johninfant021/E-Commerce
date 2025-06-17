const express=require('express');
const app=express()
const mongoose=require('mongoose');
const cors=require('cors');
const userRoutes=require('./routes/userRoutes')
const bodyParser=require('body-parser');



mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.error(err)
})

app.use(cors())
app.use(bodyParser.json())
app.use('/api/user',userRoutes)


const port=5000;

app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`)
})