const mongoose = require('mongoose');
const express = require('express');
const UserModel=require('./models/Chart');
const cors = require('cors');
const InputModel = require('./models/Chartinput');
// const connectToMongo=require('./db');
// connectToMongo();
const getRoute=require('./routes/getRoute')
const postRoute=require('./routes/postRoute')
const app = express();
app.use(express.json());
app.use(cors())
const db=("mongodb+srv://katkarrushikesh2002:Rushikesh123@training.new7giq.mongodb.net/realtimechart?retryWrites=true&w=majority")
 mongoose.connect(db).then(()=>{
    console.log("Connected");
 }).catch((err)=>{
    console.log(err);
 });



 app.use('/api',getRoute);
 app.use('/api',getRoute);
 app.use('/api',getRoute);

// app.get("/charts", (req, res) => {
//     UserModel.find().then(
//         charts => res.json(charts)
//     ).catch(
//         (err) => {
//             console.log(err);
//         }
//     )
// });


// app.post("/chartsend", async(req,res)=>{
//     // let input = new InputModel(req.body);
//     // let result=await input.save();
//     // console.log(req.body)
//     // res.send("Done");


//     try {
//         const {name,value}=req.body;
//         const input = new UserModel({ name, value });
//         console.log(input);
    
//         const result = await input.save();
//         console.log('Data saved:', result);
    
//         res.status(200).json({ message: 'Data saved successfully' });
//       } catch (error) {
//         console.error('Error saving data:', error);
//         res.status(500).json({ error: 'An error occurred while saving data' });
//       }

//     // const {name,value}=req.body;
//     //     const input = new UserModel({name,value});
//     //     console.log(input);   
//     //         const result = await input.save();
//     //         console.log('Data saved:', result);
//     //         if(res.status(200)){
//     //             json({ message: 'Data saved successfully' })
//     //         }else{
//     //             json({ error: 'An error occurred while saving data' })
//     //         }

// //     const {name,value}=req.body;
  
// //     const input = new UserModel({name,value});
// //     console.log(input);
    
// // input.save((err)=>{
// //     if(err){
// //         res.status(500).json({error:err});
// //     } else{
// //         res.status(200).json({message:"User Created Successfully!"})
// //     }

// // });
// });



app.listen(5000, ()=>{
    console.log("Server is online on port 5000");
})
