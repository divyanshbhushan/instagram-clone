const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const passport = require("passport");
const userModel = require("../database/models/usermodel");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isUnauthenticated = require("../middlewares/isUnauthenticated");

// GET routes
router.get("/" , async (req, res, next) => {
  res.render('index')
});


module.exports = router;