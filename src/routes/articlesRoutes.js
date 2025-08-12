const express = require("express");
const router = express.Router();

router.route("/")
    .get( (req, res) => {
        res.send("Get all articles");
    })
    .post( (req, res) => {
        res.send("Create New Post");
    });

router.route("/:id")
    .get((req, res) => {
        res.send(`Get article with ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update article with ID: ${req.params.id}`);
    })
    .delete ((req, res) => {
        res.send(`Delete article with ID: ${req.params.id}`);
    });

module.exports = router;