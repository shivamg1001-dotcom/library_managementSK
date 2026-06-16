const express = require("express");

const router = express.Router();

const {
    issueBook,
    getIssuedBooks,
    returnBook,
    deleteIssue
} = require("../controllers/issueController");

const protect = require("../middleware/authMiddleware");


router.post("/", protect, issueBook);

router.get("/", protect, getIssuedBooks);

router.put("/:id", protect, returnBook);

router.delete("/:id", protect, deleteIssue);

module.exports = router;
