const Article = require("../models/articles");

const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            success: true,
            message: "Articles Successfully fetched",
            data: articles
        });
    } catch(error) {
        next(error);
    }
}

const createArticle = async (req, res, next) => {
    try {
        const article = new Article({...req.body, createdAt: new Date()});
        await article.save();
        res.status(201).json({
            success: true,
            message: "Article successfully created",
            data: article
        });
    } catch(error) {
        next(error);
    }
};

module.exports = {getAllArticles, createArticle};