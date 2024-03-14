const mongoose = require('mongoose');

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required:true,
    },
    history:[{ timestamp :{ type : Number}}],
   
},  {timestamps:true} )


const URl= mongoose.model("url",urlSchema);

module.exports=URL;