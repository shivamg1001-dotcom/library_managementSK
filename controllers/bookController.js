const Book = require("../models/Book");


// CREATE BOOK

const createBook = async(req,res)=>{

    try{

        const book = await Book.create(req.body);

        res.status(201).json(book);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// GET ALL BOOKS

const getBooks = async(req,res)=>{

    try{

        const books = await Book.find()
        .populate("category");

        res.status(200).json(books);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// GET SINGLE BOOK

const getBookById = async(req,res)=>{

    try{

        const book = await Book.findById(req.params.id)
        .populate("category");

        if(!book){
            return res.status(404).json({
                message:"Book not found"
            });
        }

        res.status(200).json(book);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// UPDATE BOOK

const updateBook = async(req,res)=>{

    try{

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(!book){
            return res.status(404).json({
                message:"Book not found"
            });
        }

        res.status(200).json(book);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// DELETE BOOK

const deleteBook = async(req,res)=>{

    try{

        const book = await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({
                message:"Book not found"
            });
        }

        await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Book Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};