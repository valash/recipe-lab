const express = require("express");
const router = express.Router();
const routeController = require("../controllers/recipe");

//CRUD: Create Read Update Delete
//for recipes i want the user to be able to:
//Create a recipe -->PUT
//view a recipe, like on a feed -->GET
//delete a recipe --> ?_methodOverride
router.post("/", recipesControllers.create);
router.get("/recipe/new", recipesControllers.new);
router.get("/:id", recipesControllers.show);
router.put("/:id", recipesControllers.update);

module.exports = router;
