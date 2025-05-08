const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send('API Node.js + PostgreSQL está no ar!');
});

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
