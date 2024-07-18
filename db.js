const mysql = require('mysql2/promise');
const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectUsuarios() {
    const res = await client.query('SELECT * FROM USUARIOS');
    return res[0];
}

async function selectUsuarioPorId(id) {
    const res = await client.query('SELECT * FROM USUARIOS WHERE ID=?;', [id]);
    return res[0];
}

async function deleteUsuarioPorId(id) {
    return await client.query('DELETE FROM USUARIOS where id=?;', [id]);
}

async function insertUsuario(usuario) {
    const sql = 'INSERT INTO USUARIOS(nome,idade,cidade) VALUES (?,?,?);';
    const values = [usuario.nome, usuario.idade, usuario.cidade];
    await client.query(sql, values);
}

async function updateUsuario(id, usuario) {
    const sql = 'UPDATE USUARIOS SET nome=?, idade=?, cidade=? WHERE id=?';
    const values = [usuario.nome, usuario.idade, usuario.cidade, id];
    await client.query(sql, values);
}

module.exports = { selectUsuarios , selectUsuarioPorId , deleteUsuarioPorId , insertUsuario , updateUsuario }
