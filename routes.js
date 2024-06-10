import express from "express";

const routes = express.Router();

const autores = [
    {id: 1 , name: "Machado de Assis"},
    {id: 2 , name: "Monteiro Lobato"},
    {id: 3 , name: "Dan Brown"}
]

routes.get('/', (req, res) => {
    res.send("Hello World")
})

routes.get('/autores', (req, res) => {
    res.json(autores)
})

routes.get('/autores/:id', (req, res) => {
    const id = Number(req.params.id)

    const autor = autores.filter((item) => item.id === id)
    
    res.json(autor ? autor : "Mamou...")
})




export { routes as default }