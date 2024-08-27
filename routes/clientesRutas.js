const express = require ("express");
const router = express.Router();
const clienteController = require ("../controllers/clienteController");

// Rutas del CRUD

router.post("/", clienteController.agregarclientes);
router.get("/", clienteController.mostrarClientes);
router.get("/:id", clienteController.buscarCliente);
router.put("/:id", clienteController.modificarCliente);
/*router.patch("/:id", clienteController.editarCliente);*/
router.delete("/:id", clienteController.eliminarCliente);



module.exports = router;