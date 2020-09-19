const mysql = require('mysql');
const conn = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'test',
    port: 3306
});

module.exports = conn;