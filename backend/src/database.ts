import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'diego10617',
  database: process.env.DB_NAME || 'mi_app_db',
  port: Number(process.env.DB_PORT) || 3308,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;