const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  Title: String,
  Instructions: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  whenCreated: {
    default: Date.now()
  }
});

module.exports = mongoose.model("Recipe", Recipe);
