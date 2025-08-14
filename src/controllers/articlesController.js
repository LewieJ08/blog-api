const Article = require("../models/articles");

const createArticle = async (req, res) => {
    const article = new Article(req.body);
    await article.save();
    res.json({message: "Article Created"})
};

module.exports = createArticle