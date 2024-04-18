import { openDb } from "../infraestrutura/config/configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Posts (Id INTEGER PRIMARY KEY, Titulo TEXT, Descricao TEXT, UrlFoto TEXT, Data_Criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, Data_Atualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)');
    })
}

export async function insert(post) {
    openDb().then(db => {
        db.run('INSERT INTO Posts (Titulo, Descricao, UrlFoto ) VALUES (?,?,?)', [post.titulo, post.descricao, post. urlFoto]);
    })
}

export async function update(id, post){
    openDb().then(db => {
        db.run('UPDATE Posts SET Titulo=?, Descricao=?, UrlFoto=? WHERE Id=?', [post.titulo, post.descricao, post.urlFoto, id])
    })
}

export async function findAll(){
    return openDb().then(db => {
        return db.all('SELECT * FROM Posts')
        .then(response => response)
    })
}

export async function findByid(id){
    return openDb().then(db => {
        return db.get('SELECT * FROM Posts WHERE Id=?', [id])
        .then(response => response)
    })
}

export async function deleteById(id){
    return openDb().then(db => {
        return db.get('DELETE FROM Posts WHERE Id=?', [id])
        .then(response => response)
    })
}
