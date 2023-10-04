const mysql = require('mysql2');
const colors = require('colors');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ptcn2'
});

connection.connect((err) => {
    if (err) {
        console.log(`Error connecting to MySQL database: ${err.stack}`.red.bold);
        return;
    }

    console.log(`Connected to MySQL database as id ${connection.threadId}`.yellow);
});

module.exports = connection;

