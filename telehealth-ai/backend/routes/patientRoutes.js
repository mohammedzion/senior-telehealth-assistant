const express = require("express");

const router = express.Router();

const {
  addExercise,
  getExercises
} = require("../controllers/patientController");

router.post("/exercise", addExercise);

router.get("/exercise/:patientId", getExercises);

module.exports = router;