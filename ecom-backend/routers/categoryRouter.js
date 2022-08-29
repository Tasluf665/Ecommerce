const express = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryControllers");
const admin = require("../middlewares/admin");
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.route("/").post([authorize, admin], createCategory).get(getCategories);

module.exports = router;
