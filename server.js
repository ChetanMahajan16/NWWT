const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000;
 


app.get("/",(req, res)=>{
    console.log("hello fron home page");
    
})

mongoose.connect('mongodb://localhost:27017/NwT')
.then(()=>
    console.log('Connected')
)
.catch(()=>
    console.log('Not Connected')
)

const Emplooye = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    }
}
)

const EmModel = new mongoose.model('empdata',Emplooye)

app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})