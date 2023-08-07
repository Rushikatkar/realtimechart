const mongoose=require('mongoose');
const { Schema } = mongoose;
const ChartSchema= new Schema({
    name:{
        type:String,
        reuired:true
    },
    value:{
        type: Number
    }
});
module.exports=mongoose.Model('Chart',ChartSchema);