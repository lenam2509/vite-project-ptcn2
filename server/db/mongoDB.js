const mongoose = require('mongoose');
const db = mongoose.connection;
const clc = require("cli-color");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

db.on('open', () => {
    console.log(clc.green('Đã kết nối tới MongoDB'));
});

db.on('error', (err) => {
    console.log(clc.red('Kết nối lỗi MongoDB: ' + err));
});


module.exports = db;