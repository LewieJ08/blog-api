const express = require("express");
const app = express();
require('dotenv').config({path: __dirname + "/.env"});

const loggerMiddleware = require("./middleware/logger");
const articlesRouter = require("./routes/articles");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(loggerMiddleware)
app.use("/articles", articlesRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
});