import express from "express";
import autorRoutes from "./models/autor/routes.js"

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Hello World")
});

routes.use(autorRoutes)

export { routes as default }