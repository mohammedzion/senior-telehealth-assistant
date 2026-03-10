const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  age: Number,

  condition: String

});

module.exports = mongoose.model("Patient", PatientSchema);