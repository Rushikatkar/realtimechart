const mongoose=require("mongoose");

const chartinputSchema=new mongoose.Schema({
    name: String,
    value:Number,
});

const InputModel=mongoose.model("chartsinput",chartinputSchema);
module.exports=InputModel
