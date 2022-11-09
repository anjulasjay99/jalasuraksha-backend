const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymenetSchema = new Schema({
  
  fullName: { type: String, required: true },
  cardNo: { type: String, required: true },
  exp: { type: String, required: true },
  cvv: { type: String, required: true },

});

const paymentSchema = mongoose.model("payments", PaymenetSchema);

module.exports = paymentSchema;