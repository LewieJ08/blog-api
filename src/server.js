const express = require("express");
const app = express();
const loggerMiddleware = require("./middleware/logger")
const articlesRouter = require("./routes/articles")

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(loggerMiddleware)
app.use("/articles", articlesRouter)

app.get("/", (req, res) => {
    res.send("Here")
});

app.listen(3000, () => {
    console.log("Server running on port: 3000")
});