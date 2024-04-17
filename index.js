import { openDb } from './configDB.js';
import express from 'express'

const app = express()
app.use(express.json())

openDb();

let posts = []

app.get("/", (request, response) => {
    return response.json(posts)
})

app.post("/", (request, response) => {
    const post = { 
        id: posts.length + 1,
        titulo : request.body.titulo, 
        descricao : request.body.descricao, 
        urlFoto : request.body.urlFoto, 
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
    }

    posts.push(post)
    return response.json(posts)
})

app.get("/:id", (request, response) => {
    let id = request.params.id;
    return response.json(posts[id])
})

app.delete("/:id", (request, response) => {
    let id = request.params.id;
    let post = posts.indexOf(id)
    if(id > -1){
        posts.splice(id-1, 1)
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            post.id = posts.indexOf(posts[i])+1
            posts[i] = post
        }
        return response.json("removido com sucesso!")
    }else{
        return response.json("Algo inexperado aconteceu, por favor tente novamente!")
    }
})

app.patch("/:id", (request, response) => {

    let id = request.params.id;
    let post = posts[id-1]

    post.titulo = request.body.titulo, 
    post.descricao = request.body.descricao, 
    post.urlFoto = request.body.urlFoto, 
    post.dataAtualizacao= new Date() 

    posts[id-1] = post
    return response.json(posts)
})

app.listen(3000)