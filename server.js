const express = require("express")
const mongoose = require("mongoose")
const fs = require('fs');
let cors = require("cors");
var bodyParser = require('body-parser');
var path = require('path');
mongoose.connect("mongodb://localhost/Temp").then(() => {console.log("db connect")}).catch((error) => {throw error})  //ใส่เพื่อให้มันรันได้ผ่าน port 
const Temps = require("./models/temper") 
 
 
 
const app = express();
app.use(cors());
 

app.get('/', async (req,res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));  //นำข้อมูลมาแสดงที่ไฟล์/public/index.html
});

app.get('/temps', async (req, res) => {
 
    let temp =  await  Temps.find({});
    res.send(temp);
});

app.listen(4000,() => {
    console.log("start server http://localhost:4000")  //กำหนด port4000
})


