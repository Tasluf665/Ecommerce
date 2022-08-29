const express = require("express");
const { signin, signup } = require("../controllers/userControllers");

const router = express.Router();

router.route("/signup").post(signup);

router.route("/signin").post(signin);

module.exports = router;
