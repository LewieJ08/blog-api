const express = require("express");
const articlesController = require("../controllers/articlesController");
const idCheckerMiddleware = require("../middleware/idChecker")

const router = express.Router();

router.route("/")
    .get(articlesController.getAllArticles)
    .post(articlesController.createArticle);

router.route("/:id")
    .get(idCheckerMiddleware, articlesController.getArticle)
    .put(idCheckerMiddleware, articlesController.updateArticle)
    .delete (idCheckerMiddleware, articlesController.deleteArticle);

module.exports = router;