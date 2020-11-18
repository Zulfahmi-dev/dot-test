require('dotenv').config();
require("module-alias/register");
require("dotenv").config();

const express = require("express");
const router = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

router(app);

// app.get('/', (req, res) => {
//     console.log('hausa ')
// })

// production
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
