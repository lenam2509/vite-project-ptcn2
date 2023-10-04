require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const cors = require('cors');
const body_parser = require('body-parser');
const db = require('./db/conectDB');
const morgan = require('morgan');
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');



app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));



// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(morgan('dev'));






app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        error: process.env.NODE_ENV === 'development' ? error : {}
    });
});

// Routes
app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);


const PORT = process.env.PORT || 2509;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`.yellow.bold);
});