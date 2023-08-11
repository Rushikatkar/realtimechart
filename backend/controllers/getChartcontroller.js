
const UserModel=require('../models/Chart')
const InputModel=require('../models/Chartinput')
const getchartController=(req,res)=>{
    UserModel.find().then(
        charts => res.json(charts)
    ).catch(
        (err) => {
            console.log(err);
        }
    )
}

const postchartController=async(req,res)=>{
    try {
        const {name,value}=req.body;
        const input = new UserModel({ name, value });
        console.log(input);
    
        const result = await input.save();
        console.log('Data saved:', result);
    
        res.status(200).json({ message: 'Data saved successfully' });
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data' });
      }

}
const postrealchartController=async(req,res)=>{
    try {
        const newArray=req.body;
        InputModel.insertMany(newArray)
        // const input = new InputModel({ name, value });
        // console.log(input);
    
        // const result = await input.save();
        // console.log('Data saved:', result);
    
        res.status(200).json({ message: 'Data saved successfully' });
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data' });
      }

}
module.exports={
    getchartController,
    postchartController,
    postrealchartController
}