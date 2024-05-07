const express=require("express");
const mongoose=require("mongoose")
const { Account, User } = require("../db");
const { authMiddleware } = require("../middleware");
const router=express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
    const userId=req.userId;
    console.log(userId);
    const account=await Account.findOne({userId:userId});
    res.json({
        balance:account.balance
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{
    // const {amount,to}=req.body;

    // const account=await Account.findOne({
    //     userId:req.userId
    // })

    // if(account.balance < amount){
    //     return res.status(400).json({
    //         message:"Insufficient balance"
    //     })
    // }
    // const toAccount=await Account.findOne({
    //     userId:to
    // })

    // if(!toAccount){
    //     return res.status(400).json({
    //         message:"Invalid Account"
    //     })
    // }

    // await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}})
    // await Account.updateOne({userId:to},{$inc:{balance:amount}})

    // res.json({
    //     message:"Transfer successful"
    // })

    // good solution
    const session=await mongoose.startSession();

    session.startTransaction();
    const {amount,to}=req.body;

    //fetch the account within the transcation
    const account=await Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }

    const toAccount=await Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account"
        });
    }

    //perform the transfer
    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    //commit the transcation
    await session.commitTransaction();
    res.json({
        message:"Transfer Successful"
    })
})
module.exports=router;