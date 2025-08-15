const Article = require("../models/articles");

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

module.exports = createArticle;