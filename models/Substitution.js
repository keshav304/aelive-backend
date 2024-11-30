// models/Substitution.js
const mongoose = require("mongoose");

const substitutionSchema = new mongoose.Schema({
  playerOutName: { type: String, required: true },
  playerOutNumber: { type: String, required: true },
  playerInName: { type: String, required: true },
  playerInNumber: { type: String, required: true },
  substitutionTime: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Substitution = mongoose.model("Substitution", substitutionSchema);

module.exports = Substitution;
