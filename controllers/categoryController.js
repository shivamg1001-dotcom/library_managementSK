const Category = require("../models/Category");


// CREATE CATEGORY

const createCategory = async(req,res)=>{

    try{

        const {name,description} = req.body;

        const category = await Category.create({
            name,
            description
        });

        res.status(201).json(category);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// GET ALL CATEGORIES

const getCategories = async(req,res)=>{

    try{

        const categories = await Category.find();

        res.status(200).json(categories);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// UPDATE CATEGORY

const updateCategory = async(req,res)=>{

    try{

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }

        res.status(200).json(category);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};


// DELETE CATEGORY

const deleteCategory = async(req,res)=>{

    try{

        const category = await Category.findById(req.params.id);

        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }

        await Category.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Category Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
};