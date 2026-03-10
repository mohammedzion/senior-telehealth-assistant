const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = new Patient({
      name,
      email,
      password: hashedPassword
    });

    await patient.save();

    res.json({
      message: "Patient registered successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const match = await bcrypt.compare(password, patient.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: patient._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      patient
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};