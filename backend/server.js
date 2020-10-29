const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const dummyData = {
    userName: "Deborah",
    password:"123456789",
}

app.get("/", (req, res) => {
    res.json(dummyData);
})

app.listen(port);