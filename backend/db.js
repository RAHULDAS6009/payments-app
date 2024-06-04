require('dotenv').config()
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URL);

//create schema for users
//want to know the differnce between new and without new keyword
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,//for unique username
        trim:true,//'   Rahul'-> 'Rahul'
        lowercase:true,//"RaHul"->"rahul"
        minLength:3,//minimum 3 letters username
        maxLength:30//maximum 30 letters username
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
})

const accountSchema=new mongoose.Schema({
    userId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }],
    balance:{
        type:Number,
        required:true
    }
})

//create a model from the Schema
const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema);


module.exports={
    User,Account
};