const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  Title: String,
  Instructions: String,
  whenCreated: {
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// export
module.exports;
