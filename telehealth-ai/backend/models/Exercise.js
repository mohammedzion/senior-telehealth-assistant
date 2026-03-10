const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },

  exerciseName: String,

  score: Number,

  painLevel: Number,

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Exercise", ExerciseSchema);