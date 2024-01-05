const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recordSchema = Schema({
  recordId: Number,
  employeeId: Number,
  checkInTime: Date,
  checkOutTime: Date,
});

module.exports = model("Record", recordSchema);