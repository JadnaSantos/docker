import mysql from 'mysql2'

export const connection = mysql.createPool({
    host: process.env.HOST || 'db',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'password',
    database: process.env.DB_PORT || '3306',
});

