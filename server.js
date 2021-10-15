const express = require("express")
const mongoose = require("mongoose")
const fs = require('fs');
let cors = require("cors");
var bodyParser = require('body-parser');
var path = require('path');
mongoose.connect("mongodb://localhost/temp").then(() => {console.log("db connectting")}).catch((error) => {throw error})  //ใส่เพื่อให้มันรันได้ผ่าน port 
const temp = require("./models/Temp") 
const app = express();
app.use(cors());



app.get('/', async (req,res) =>{
    
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/Temp', async (req, res) => {
    let temp =  await temp.find({});
    res.send(temp);
});



app.listen(4000,() => {
    console.log("start server http://localhost:4000")  //กำหนด port4000
})