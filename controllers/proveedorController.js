const Proveedor = require("../models/Proveedor");
/*const { param } = require("../routes/proveedorRutas");*/ // La comento por que me saca error

// funcion para agregar clientes

exports.agregarProveedor = async (req, res) => {
    try {

        let proveedores;
        proveedores = new Proveedor (req.body)
        await proveedores.save();
        res.json(proveedores);
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al agregar el Proveedor");
    }
}

// funcion buscar clientes

exports.mostrarProveedor = async (req, res) => {
    try {

        const proveedores = await Proveedor.find();
        res.json(proveedores);
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al mostrar el Proveedor");
    }
}

// función buscar un cliente

exports.buscarProveedor = async (req, res) => {
    try {

        let proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg:"El Proveedor no se encuentra por ID"});           
        }else{            
            res.json(proveedores);
        }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al buscar el Proveedor");
    }
}

// funcion modificar clientes con el metodo put

exports.modificarProveedor = async (req, res) => {

    try {

    const proveedores = await Proveedor.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if(!proveedores) {
        res.status(404).send({msg:"Proveedor NO encontrado"});
    }else{
        res.json(proveedores);
        
    }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al modificar el Proveedor");
    }

}

// funcion modificar utilizando patch (hace lo mismo que put)

exports.editarProveedor = async (req, res) => {

    try {

    const proveedores = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!proveedores) {
        return res.status(404).send({msg:"Proveedor NO encontrado"});
    }else{
        res.json(proveedores);
        
    }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al modificar el Proveedor");
    }
}

// funcion eliminar clientes

exports.eliminarProveedor = async (req, res) => {

    try {

    let proveedores = await Proveedor.findById({_id: req.params.id});
    if(!proveedores) {
        res.status(404).send({msg:"Proveedor NO encontrado"});
        return
    }

    await Proveedor.findOneAndDelete({_id: req.params.id})
        res.json({msg:"Proveedor ELIMINADO"});
        return
        
            
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al eliminar el Proveedor");
    }
}