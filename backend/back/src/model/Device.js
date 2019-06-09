
const mongoose = require("mongoose");

module.exports = Device = mongoose.model(
  "Device",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    serialNumber: {
      type: String,
      required: true
    },
    registeredDate: {
      type: String,
      required: true
    },
  })
);
