const mysql = require('mysql2');
const colors = require('colors');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'ptcn2'
});

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to MySQL database: ${err.stack}`.red.bold);
        return;
    }

    console.log(`Connected to MySQL database as id ${connection.threadId}`.yellow.bold);
});

module.exports = connection;

