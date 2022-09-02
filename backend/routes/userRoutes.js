const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// go through protect middleware first before allusers,
// to make sure it is authorized
router.route("/").post(registerUser).get(protect, allUsers);

router.post("/login", authUser);

module.exports = router;
