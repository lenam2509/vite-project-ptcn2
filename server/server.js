require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const cors = require('cors');
const body_parser = require('body-parser');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(body_parser.json());




app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        error: process.env.NODE_ENV === 'development' ? error : {}
    });
});

// Routes



const PORT = process.env.PORT || 2509;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`.yellow.bold);
});