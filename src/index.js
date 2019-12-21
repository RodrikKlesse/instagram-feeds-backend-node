const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://rklesse:r.klesse@cluster0-huvod.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);