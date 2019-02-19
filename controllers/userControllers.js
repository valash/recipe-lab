const { User } = require("../models/userModels");

module.exports = {
  new: (req, res) => {
    // console.log('"new" method is a thiiiiing');
    res.render("index");
  }
};
