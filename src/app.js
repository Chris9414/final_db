const express = require('express');
const ApiRoutes = require('./routes');

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

ApiRoutes(app);

app.get("/", (req,res) => {
    res.send("Hola Mundo")
});

app.use((error, req, res, next) => {
    res.status(400).json(error);
  });

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
