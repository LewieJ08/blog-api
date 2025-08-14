const express = require("express");
const createArticle = require("../controllers/articlesController");

const router = express.Router();

router.route("/")
    .get(() => {})
    .post(createArticle);

router.route("/:id")
    .get(() => {})
    .put(() => {})
    .delete (() => {});

module.exports = router;