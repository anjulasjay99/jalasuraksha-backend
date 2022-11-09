const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonarSchema = new Schema({
  
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  telNo: { type: String, required: true },
  amount: { type: Number, required: true },
 
});

const donarSchema = mongoose.model("donars", DonarSchema);

module.exports = donarSchema;
