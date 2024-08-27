const express = require ("express");
const router = express.Router();
const proveedorController = require ("../controllers/proveedorController");

// Rutas del CRUD

router.post("/", proveedorController.agregarProveedor);
router.get("/", proveedorController.mostrarProveedor);
router.get("/:id", proveedorController.buscarProveedor)
router.put("/:id", proveedorController.modificarProveedor);
/*router.patch("/:id", proveedorController.editarProveedor);*/
router.delete("/:id", proveedorController.eliminarProveedor);



module.exports = router;