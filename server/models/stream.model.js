const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 15,
      match: /^[a-zA-Z0-9_]+$/,
    },
    trialDays: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
  },
  { timestamps: true }
);

const Stream = mongoose.model('Stream', streamSchema);

module.exports = Stream;
