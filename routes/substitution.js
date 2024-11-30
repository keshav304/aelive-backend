const express = require("express");
const Substitution = require("../models/Substitution");
const router = express.Router();

// Route to log substitution data
router.post("/log", async (req, res) => {
  const {
    playerOutName,
    playerOutNumber,
    playerInName,
    playerInNumber,
    subTime,
  } = req.body;

  try {
    const newSubstitution = new Substitution({
      playerOutName,
      playerOutNumber,
      playerInName,
      playerInNumber,
      substitutionTime: subTime,
    });

    await newSubstitution.save();
    res.status(200).json({ message: "Substitution logged successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error logging substitution", message: err.message });
  }
});

// Route to get all substitutions
router.get("/list", async (req, res) => {
  try {
    // Fetch all substitutions from the database
    const substitutions = await Substitution.find();

    // If no substitutions are found
    if (substitutions.length === 0) {
      return res.status(404).json({ message: "No substitutions found!" });
    }

    // Return all substitutions
    res.status(200).json(substitutions);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching substitutions", message: err.message });
  }
});

module.exports = router;
