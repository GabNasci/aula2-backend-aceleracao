let autores = [
    {id: 1 , name: "Machado de Assis"},
    {id: 2 , name: "Monteiro Lobato"},
    {id: 3 , name: "Dan Brown"}
]


function findAll() {
    return autores
}

function findById(id) {
    return autores.filter((item) => item.id === id)
}

function createAuthor(autor) {
    autores.push({id: autores.length + 1, name: autor.name})
}

function findByName(nome) {
    return autores.filter((item) => item.name.includes(nome))
}

export default {
    findAll,
    findById,
    createAuthor,
    findByName
}