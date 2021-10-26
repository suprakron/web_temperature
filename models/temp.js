const mongoose = require("mongoose")   //ฐานข้อมูล

const schema = new mongoose.Schema({
    
    date : {type : Date, default : Date.now()}, year : {type : Number, required : true}, mouth : {type : Number, required : true},day : {type : Number, required : true},
      //day : {type : Number, required : true},
     //week : {type : Number, required : true}, 
     //mouth : {type : Number, required : true},   //สร้างตัวแปรขึ้นมาเพื่อให้มันเรียกใช้โดยใช้ตัวเลขในการเรียก type number เรียกใช้วัน แยกเป็น วัน วีค เดือน

    time : {type : Number, required : true}, minute : {type : Number, required : true}, 
    //time : {type : String, required: true},  
   
     temp : {type : Number, required : true},
})

const temp = mongoose.model("Temp", schema)
module.exports = temp //เก็บไว้ที่ตัวแปร