const express = require("express");
const connectDB = require("./config/db");
const loggerMiddleware = require("./middleware/logger");
const errorHandlerMiddleware = require("./middleware/errorHandler")
const articlesRouter = require("./routes/articlesRoutes");

const app = express();
require('dotenv').config({path: __dirname + "/.env"});
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(loggerMiddleware);
app.use(errorHandlerMiddleware)
app.use("/articles", articlesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});