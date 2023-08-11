const mongoose=require('mongoose');

const chartSchema= new mongoose.Schema({
    name: String,
    value:Number,
});
const UserModel=mongoose.model("charts",chartSchema);
module.exports=UserModel