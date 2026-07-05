import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import pool from './database';

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares obligatorios
app.use(cors());
app.use(express.json()); // Crucial: Permite que el backend entienda los JSON que envíe React

app.post('/api/auth/signup', async(req, res) => {
  try{
    const {username, email, password} = req.body;

    if(!username || !email || !password){
      return res.status(400).json({message:"All fields are required"})
    }

    const [existingUser]: any = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if(existingUser.length > 0){
      return res.status(400).json({message:"This email already exist"})
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await pool.query(
      'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    return res.status(201).json({ message: "Usuario creado con éxito" });

  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});