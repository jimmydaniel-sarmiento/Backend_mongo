const Cliente = require("../models/Cliente");
/*const { param } = require("../routes/clientesRutas");*/ // La comento por que me saca error

// funcion para agregar clientes

exports.agregarclientes = async (req, res) => {
    try {

        let clientes;
        clientes = new Cliente (req.body)
        await clientes.save();
        res.json(clientes);
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al agregar el Cliente");
    }
}

// funcion buscar clientes

exports.mostrarClientes = async (req, res) => {
    try {

        const clientes = await Cliente.find();
        res.json(clientes);
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al mostrar el Cliente");
    }
}

// función buscar un cliente

exports.buscarCliente = async (req, res) => {
    try {

        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"El Cliente no se encuentra por ID"});           
        }else{            
            res.json(clientes);
        }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al buscar el Cliente");
    }
}

// funcion modificar clientes con el metodo put

exports.modificarCliente = async (req, res) => {

    try {

    const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if(!clientes) {
        res.status(404).send({msg:"Cliente NO encontrado"});
    }else{
        res.json(clientes);
        
    }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al modificar el Cliente");
    }

}

// funcion modificar utilizando patch (hace lo mismo que put)

exports.editarCliente = async (req, res) => {

    try {

    const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!clientes) {
        return res.status(404).send({msg:"Cliente NO encontrado"});
    }else{
        res.json(clientes);
        
    }
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al modificar el Cliente");
    }
}

// funcion eliminar clientes

exports.eliminarCliente = async (req, res) => {

    try {

    let clientes = await Cliente.findById({_id: req.params.id});
    if(!clientes) {
        res.status(404).send({msg:"Cliente NO encontrado"});
        return
    }

    await Cliente.findOneAndDelete({_id: req.params.id})
        res.json({msg:"Cliente ELIMINADO"});
        return
        
            
    } catch (error) {
        
        console.log(error)
        res.status(500).send("Hubo un ERROR al eliminar el Cliente");
    }
}