const IssueBook = require("../models/IssueBook");
const Book = require("../models/Book");


// ISSUE BOOK

const issueBook = async(req,res)=>{

    try{

        const {userId, bookId, dueDate} = req.body;

        const book = await Book.findById(bookId);

        if(!book){
            return res.status(404).json({
                message:"Book not found"
            });
        }

        if(book.availableCopies <= 0){
            return res.status(400).json({
                message:"Book not available"
            });
        }

        const issue = await IssueBook.create({
            userId,
            bookId,
            dueDate
        });

        book.availableCopies -= 1;

        await book.save();

        res.status(201).json(issue);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// GET ALL ISSUED BOOKS

const getIssuedBooks = async(req,res)=>{

    try{

        const issues = await IssueBook.find()
        .populate("userId","name email")
        .populate("bookId","title author");

        res.status(200).json(issues);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// RETURN BOOK

const returnBook = async(req,res)=>{

    try{

        const issue = await IssueBook.findById(req.params.id);

        if(!issue){
            return res.status(404).json({
                message:"Issue Record not found"
            });
        }

        if(issue.status === "Returned"){
            return res.status(400).json({
                message:"Book already returned"
            });
        }

        issue.status = "Returned";

        issue.returnDate = new Date();

        await issue.save();

        const book = await Book.findById(issue.bookId);

        if(book){
            book.availableCopies += 1;
            await book.save();
        }

        res.status(200).json({
            message:"Book Returned Successfully",
            issue
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// DELETE ISSUE RECORD

const deleteIssue = async(req,res)=>{

    try{

        const issue = await IssueBook.findById(req.params.id);

        if(!issue){
            return res.status(404).json({
                message:"Issue Record not found"
            });
        }

        await IssueBook.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Issue Record Deleted"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

module.exports = {
    issueBook,
    getIssuedBooks,
    returnBook,
    deleteIssue
};