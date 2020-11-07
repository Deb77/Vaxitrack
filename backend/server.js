const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const parentRoutes = require('./routes/parentRoutes');
const childRoutes = require('./routes/childRoutes');

const app = express();
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.use('/doctor', doctorRoutes);
app.use('/parent', parentRoutes);
app.use('/child',childRoutes);

app.listen(port);