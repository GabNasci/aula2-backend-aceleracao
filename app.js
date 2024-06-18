import express from "express"
import routes from "./routes.js"
import db from "./db.js"

const app = express()
const port = 3000

app.use(express.json())

app.use(routes)

db.sync(() => console.log(`Conectando ao banco de dados ${process.env.DB_NAME}`));

app.listen(port)
console.log(`Rodando na porta ${port}`)

