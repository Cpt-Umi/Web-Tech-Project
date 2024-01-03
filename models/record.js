const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recordSchema = Schema({
  checkInOutID: Number,
  employeeID: Number,
  checkInTime: Date,
  checkOutTime: Date,
  date: Date,
  checkedIn: Boolean
});

module.exports = model("Record", recordSchema);