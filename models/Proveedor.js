const mongoose = require ("mongoose");

// El modelo que hacemos aca es el que vamos a montar en postman

const proveedorSchema = mongoose.Schema ({

    nombre: {
        type: String,
        required: true
    },

    nit: {
        type: Number,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    telefono: { 
        type: Number,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

},{versionkey:false});

module.exports = mongoose.model("Proveedor", proveedorSchema);