const express = require("express");
const userCtrl = require("../controller/user");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//Register
router.post("/api/users/register", userCtrl.register);
// login
router.post("/api/users/login", userCtrl.login);
// Get user profile
router.get("/api/users/profile", isAuthenticated, userCtrl.profile);

module.exports = router;
