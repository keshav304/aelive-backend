// routes/substitution.js
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

module.exports = router;
