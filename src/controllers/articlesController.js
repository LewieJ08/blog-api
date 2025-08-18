const Article = require("../models/articles");

const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            success: true,
            message: "Articles Successfully fetched.",
            data: articles
        }); 
    } catch(error) {
        next(error);
    }
};

const createArticle = async (req, res, next) => {
    try {
        let id = 1;
        let currentIds = [];
        
        const articles = await Article.find();
        
        for (doc of articles) {
            currentIds.push(doc.id);
        }

        while (currentIds.includes(id)) {
            id++;
        }
         
        const article = new Article({id: id, ...req.body, createdAt: new Date()});
        await article.save();
        res.status(201).json({
            success: true,
            message: "Article successfully created.",
            data: article
        });
    } catch(error) {
        next(error);
    }
};

const getArticle = async (req, res, next) => {
    try {
        const article = await Article.findOne({id: req.params.id});
        res.status(200).json({
            success: true,
            message: `Article (ID: ${req.params.id}) successfully fetched.`,
            data: article
        });
    } catch(error) {
        next(error);
    }
};

const deleteArticle = async (req, res, next) => {
    try {
        await Article.deleteOne({id: req.params.id});
        res.status(204).json({
            success: true,
            message: `Article (ID: ${req.params.id}) successfully deleted.`
        });
    } catch(error) {
        next(error);
    }
}

const updateArticle = async (req, res, next) => {
    try {
        await Article.updateOne({id: req.params.id}, {...req.body, updatedAt: new Date()});
        const newArticle = await Article.findOne({id: req.params.id}) 
        res.status(200).json({
            success: true,
            message: `Article (ID: ${req.params.id}) successfully updated.`,
            data: newArticle
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {getAllArticles, createArticle, getArticle, deleteArticle, updateArticle};