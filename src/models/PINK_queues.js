const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = mongoose.model(
  "PINK_queues",
  new Schema({
    guild: {
      type: String,
    },
    queueData: { type: Object, required: false },
  })
);
