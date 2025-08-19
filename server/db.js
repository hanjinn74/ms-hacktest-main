require('dotenv').config(); // .env 불러오기
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,      // env에서 가져오기
    user: process.env.DB_USER,      // env에서 가져오기
    password: process.env.DB_PASSWORD,  // env에서 가져오기
    database: process.env.DB_NAME,  // env에서 가져오기
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;
