const express = require("express");
const router = express.Router();
const app = express();
//this is for authentication!!! (Bonus 1)
// const passport = require("passport");


app.use(require("./routes/userRoute"));
=======
app.use(function (req, res) {
    res.status(404).render('error');
});


app.listen(3000, () => {
  console.log("listening on THE PORT YALL");
});
