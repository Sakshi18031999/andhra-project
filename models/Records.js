const mongoose = require("mongoose");
const { Schema } = mongoose

const recordsSchema = new Schema(
  {
    response: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Records = mongoose.model("Record", recordsSchema);

module.exports = Records;
