import express from "express";

const routes = express.Router();

let autores = [
    {id: 1 , name: "Machado de Assis"},
    {id: 2 , name: "Monteiro Lobato"},
    {id: 3 , name: "Dan Brown"}
]

routes.get('/', (req, res) => {
    res.send("Hello World")
});

routes.post('/autores', (req, res) => {
    const autor = req.body
    autor['id'] = autores.length + 1

    autores.push(autor)

    if(autor) return res.status(200).json(autor)
    return res.status(400).json({msg: "Não encontrado..."})
});

routes.get('/autores', (req, res) => {
    res.json(autores)
});

routes.get('/autores/:id', (req, res) => {
    const id = Number(req.params.id)

    const autor = autores.filter((item) => item.id === id)
    if(autor.length) return res.status(200).json(autor)
    return res.status(400).json({msg: "Mamou..."})
});

routes.delete('/autores/:id', (req, res) => {
    const id = Number(req.params.id)
    autores = autores.filter((item) => item.id !== id)
    res.status(204).send()

});

routes.get('/autores/nome/:nome', (req, res) => {
    const {nome} = req.params
    console.log(nome)
    const autor = autores.filter((item) => item.name.includes(nome))
    if(autor.length) return res.status(200).json(autor)
    if(nome.includes("Gabriel")) return res.status(200).json({msg: "Ah XIIIIIIIIIIIIIIUUU...", autor})
    return res.status(400).json({msg: "Não encontrado..."})
});

routes.post('/autores/filter-by-name', (req, res) => {
    const {name} = req.body
    console.log(name)
    const autor = autores.filter((item) => item.name.includes(name))
    if(autor.length) return res.status(200).json(autor)
    if(name.includes("Gabriel")) return res.status(200).json({msg: "Ah XIIIIIIIIIIIIIIUUU...", autor})
    return res.status(400).json({msg: "Não encontrado..."})
});

export { routes as default }