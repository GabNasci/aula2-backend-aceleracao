import express from "express";
const routes = express.Router();
import controller from "./controller.js"


routes.get('/autores', (req, res) => {
    res.json(controller.findAll())
});

routes.get('/autores/:id', (req, res) => {
    const id = Number(req.params.id)

    const autor = controller.findById(id)

    if(autor.length) return res.status(200).json(autor)

    return res.status(400).json({msg: "Mamou..."})
});


routes.post('/autores', (req, res) => {
    const autor = req.body

    controller.createAuthor(autor)

    if(autor) return res.status(200).json(autor)
    return res.status(400).json({msg: "Não encontrado..."})
});

routes.delete('/autores/:id', (req, res) => {
    const id = Number(req.params.id)
    autores = autores.filter((item) => item.id !== id)
    res.status(204).send()

});

routes.get('/autores/nome/:nome', (req, res) => {
    const {nome} = req.params
    
    const autor = controller.findByName(nome)
    console.log(autor)
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