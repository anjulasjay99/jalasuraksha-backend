const Donar = require("../models/Donar");
const Funds = require("../models/Funds");
const PaymentMethod = require("../models/PaymentMethod");



//create new donar
const createDonar = async (
    firstName,
    lastName,
    telNo,
    amount
  ) => {
    let isSuccess = false;
   
    //create a new donar object
    const donar = new Donar({
        firstName,
        lastName,
        telNo,
        amount
    });
  
    //add donar to the database
    await donar
      .save()
      .then((res) => {
        console.log(res);
        isSuccess = true;
        data = res;
      })
      .catch((error) => {
        console.error(error);
        isSuccess = false;
      });
  
    return isSuccess ? data : false;
  };



//create new fund
  const addFunds = async (
    amount,
    project,
    option,
  ) => {
    let isSuccess = false;
   
    //create a new fund object
    const funds = new Funds({
        amount,
        project,
        option
    });
  
    //add fund to the database
    await funds
      .save()
      .then((res) => {
        console.log(res);
        isSuccess = true;
        data = res;
      })
      .catch((error) => {
        console.error(error);
        isSuccess = false;
      });
  
    return isSuccess ? data : false;
  };




//create new payment
  const addPayments = async (
    fullName,
    cardNo,
    exp,
    cvv
  ) => {
    let isSuccess = false;
   
    //create a new payment object
    const paymentMethod = new PaymentMethod({
        fullName,
        cardNo,
        exp,
        cvv
    });
  
    //add payment to the database
    await paymentMethod
      .save()
      .then((res) => {
        console.log(res);
        isSuccess = true;
        data = res;
      })
      .catch((error) => {
        console.error(error);
        isSuccess = false;
      });
  
    return isSuccess ? data : false;
  };


  //get All donars
  const getAllDonars = async() =>{
    let data = [];
    let isSuccess = false;
  
    await Donar.find().then((res) =>{
      data = res;
      isSuccess = true;
    }).catch((err) =>{
      console.log(err);
      isSuccess = false;
    });
  
    if(isSuccess){
      return data;
    }
    else{
      return false;
    }
  };
  
 //get All funds
  const getAllFunds = async() =>{
    let data = [];
    let isSuccess = false;
  
    await Funds.find().then((res) =>{
      data = res;
      isSuccess = true;
    }).catch((err) =>{
      console.log(err);
      isSuccess = false;
    });
  
    if(isSuccess){
      return data;
    }
    else{
      return false;
    }
  };

 //get All payments
  const getAllPayments = async() =>{
    let data = [];
    let isSuccess = false;
  
    await PaymentMethod.find().then((res) =>{
      data = res;
      isSuccess = true;
    }).catch((err) =>{
      console.log(err);
      isSuccess = false;
    });
  
    if(isSuccess){
      return data;
    }
    else{
      return false;
    }
  };


  module.exports = {
    createDonar,
    addFunds,
    addPayments,
    getAllDonars,
    getAllFunds,
    getAllPayments
  };
  