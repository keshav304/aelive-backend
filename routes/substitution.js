// routes/substitution.js
const express = require("express");
const Substitution = require("../models/Substitution");
const router = express.Router();

// Route to log substitution data
router.post("/log", async (req, res) => {
  console.log("Received substitution data:", req.body);
  const {
    playerOutName,
    playerOutNumber,
    playerInName,
    playerInNumber,
    substitutionTime,
  } = req.body;

  try {
    const newSubstitution = new Substitution({
      playerOutName,
      playerOutNumber,
      playerInName,
      playerInNumber,
      substitutionTime,
    });
    console.log("newSubstitution", newSubstitution);

    const response = await newSubstitution.save();
    console.log("response", response);
    res.status(200).json({ message: "Substitution logged successfully!" });
  } catch (err) {
    console.log("err", err);
    res
      .status(500)
      .json({ error: "Error logging substitution", message: err.message });
  }
});

module.exports = router;
