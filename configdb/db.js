const mongoose = require ("mongoose");
require ("dotenv").config();

// funcion conexion base de datos

const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log ("...Estamos Conectados desde MONGO DB"))
    .catch((err) => console.error (err))
}

module.exports = conectarBD;