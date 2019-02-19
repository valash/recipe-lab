const express = require("express");
const router = express.Router();
const routeController = require("../controllers/userControllers");

router.get("/new", userControllers.new);
router.get("/show", userControllers.show);

router.post("/create", (req, res) => {
  let signUp = passport.authenticate("local-signup", {
    redirectSucess: "/",
    redirectFailure: "/new",
    flashFailure: true
  });
  return signUp(req, res);
});

module.exports = router;
