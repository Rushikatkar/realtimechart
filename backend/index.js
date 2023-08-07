const connectToMongo=require('./db');
const express=require('express');
connectToMongo();

const app= express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.use('/api/chart',require('./routes/chartroute'));

app.listen(3000,()=>{
    console.log('app listening on port...');
})
