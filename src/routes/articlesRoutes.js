const express = require("express");
const articlesController = require("../controllers/articlesController");

const router = express.Router();

router.route("/")
    .get(articlesController.getAllArticles)
    .post(articlesController.createArticle);

router.route("/:id")
    .get(() => {})
    .put(() => {})
    .delete (() => {});

module.exports = router;