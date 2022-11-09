const { createDonar, addFunds, addPayments, getAllDonars, getAllFunds, getAllPayments } = require("../utils/donotionDBUtil");

const router = require("express").Router();


//addDonars
router.route("/donar/add").post(async (req, res) => {
    //read request body
    const {
        firstName,
        lastName,
        telNo,
        amount
    } = req.body;
  
    //create a new db record
    const result = await createDonar(
        firstName,
        lastName,
        telNo,
        amount,
    );
  
    //send response
    if (result) {
      res.status(200).json({ success: true, data: result });
    } else {
      res.status(400).json({ success: false });
    }
  });

 

 //add Funds
  router.route("/funds/add").post(async (req, res) => {
    //read request body
    const {
        amount,
        project,
        option,
    } = req.body;
  
    //create a new db record
    const result = await addFunds(
        amount,
        project,
        option,
    );
  
    //send response
    if (result) {
      res.status(200).json({ success: true, data: result });
    } else {
      res.status(400).json({ success: false });
    }
  });

 //add Payments
  router.route("/payments/add").post(async (req, res) => {
    //read request body
    const {
        fullName,
        cardNo,
        exp,
        cvv
    } = req.body;
  
    //create a new db record
    const result = await addPayments(
        fullName,
        cardNo,
        exp,
        cvv
    );
  
    //send response
    if (result) {
      res.status(200).json({ success: true, data: result });
    } else {
      res.status(400).json({ success: false });
    }
  });

  //get All Donars
  router.route("/get/donars").get(async(req,res)=>{
    const result = await getAllDonars();
  
    if(result){
      res.status(200).json({ success : true , data: result});
    } else {
      res.status(400).json({success: false})
    }
  })

  //get all Funds
  router.route("/get/funds").get(async(req,res)=>{
    const result = await getAllFunds();
  
    if(result){
      res.status(200).json({ success : true , data: result});
    } else {
      res.status(400).json({success: false})
    }
  })

  //get All payments
  router.route("/get/payments").get(async(req,res)=>{
    const result = await getAllPayments();
  
    if(result){
      res.status(200).json({ success : true , data: result});
    } else {
      res.status(400).json({success: false})
    }
  })

   //get All payments
   router.route("/get/payments").get(async(req,res)=>{
    const result = await getAllPayments();
  
    if(result){
      res.status(200).json({ success : true , data: result});
    } else {
      res.status(400).json({success: false})
    }
  })

  module.exports = router;