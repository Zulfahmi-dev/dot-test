require('dotenv').config();
require("module-alias/register");

const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

router(app);

module.exports = app;