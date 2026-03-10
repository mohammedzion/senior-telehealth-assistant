const Exercise = require("../models/Exercise");

exports.addExercise = async (req, res) => {

  try {

    const exercise = new Exercise(req.body);

    await exercise.save();

    res.json({
      message: "Exercise saved"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.getExercises = async (req, res) => {

  try {

    const exercises = await Exercise.find({
      patientId: req.params.patientId
    });

    res.json(exercises);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};