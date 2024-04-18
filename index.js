import express from 'express'
import { createTable, deleteById, findAll, findByid, insert, update } from './service/postService.js';

const app = express()
app.use(express.json())

createTable();

app.get("/", async (request, response) => {
    let posts = await findAll()
    return response.json(posts)
})

app.get("/:id", async (request, response) => {
    let id = request.params.id;
    let post = await findByid(id) 
    return response.json(post)
})

app.post("/", (request, response) => {
    insert(request.body)
    return response.json('status code: 200')
})


app.delete("/:id", (request, response) => {
    let id = request.params.id;

    if(id >= 1){
        deleteById(id);
        return response.json("removido com sucesso!")
    }else{
        return response.json("Algo inexperado aconteceu, por favor tente novamente!")
    }
})

app.patch("/:id", (request, response) => {
    let id = request.params.id;
    if (id > 0) {
        let posts = update(id, request.body)
        return response.json(posts)
    }
    return response.json('error')
})

app.listen(3000)