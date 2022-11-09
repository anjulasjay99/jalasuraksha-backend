const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FundsSchema = new Schema({
  
  amount: { type: Number, required: true },
  project: { type: String, required: true },
  option: { type: String, required: true },

});

const fundsSchema = mongoose.model("funds", FundsSchema);

module.exports = fundsSchema;