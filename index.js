require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

const db = require('./data_base/db');

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/usuarios', async (req, res) => {
    const results = await db.selectUsuarios();
    res.json(results);
});

app.get('/usuarios/:id', async (req, res) => {
    const results = await db.selectUsuarioPorId(req.params.id);
    res.json(results);
});

app.delete('/usuarios/:id', async (req, res) => {
    const results = await db.deleteUsuarioPorId(req.params.id);
    res.json(results);
    res.sendStatus(204);
});

app.post('/cadastrarUsuario', async (req, res) => {
    await db.insertUsuario(req.body);
    res.sendStatus(201);
});

app.patch('editarusuario/:id', async (req, res) => {
    await db.updateUsuario(req.params.id, req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
