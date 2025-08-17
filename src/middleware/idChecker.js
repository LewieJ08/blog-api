const Article = require("../models/articles")

module.exports = async function (req, res, next) {
    try {
        const article = await Article.findOne({id: req.params.id})
        if (!article) {
            return res.status(404).json({
                success: false,
                error: `Article with ID: ${req.params.id} does not exist.`
            })
        }
    } catch(error) {
        next(error);
    }
    
    next();
}