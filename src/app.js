const express = require('express');
const ApiRoutes = require('./routes');
const errorHandlerRouter = require('./routes/errorHandler.routes');

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

ApiRoutes(app);

app.get("/", (req,res) => {
    res.send("Hola Mundo")
});

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
