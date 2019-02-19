const Recipe = require("../models/recipesModels");

module.exports = {
  new: (req, res) => {
    res.send("Hello World");
  },

  new: (req, res) => {
    res.render("/createRecipe,");
    console.log("new recipe form");
  }
};
