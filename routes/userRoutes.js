const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getUsers,
    deleteUser
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/", protect, getUsers);

router.delete("/:id", protect, deleteUser);

module.exports = router;