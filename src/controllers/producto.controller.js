import {conseguirProductos,conseguirProductoPorId,createProducto,updateProducto,deleteProducto} from '../models/Productos.js';
export const getProductos = async (req,res) => {
    const productos = await conseguirProductos();
    res.json(productos);
}

export const getProductoPorId = async (req,res) => {
    const {id} = req.params;
    const producto = await conseguirProductoPorId(id);
    if(!producto){
        return res.status(404).json({message: 'Producto no encontrado'});
    }

    res.json(producto);
}

export const postProducto = async (req,res) => {
    const{nombre,categoria,descripcion,precio,talle,color,imagen,stock} = req.body;
   
    if(!nombre || !categoria || !descripcion || !precio || !talle || !color || !imagen || !stock){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    const producto = await createProducto(
    {   nombre,
        categoria,
        descripcion,
        precio,
        talle,
        color,
        imagen,
        stock
    });
    res.status(201).json(producto);
}

export const putProducto = async (req,res) => {
    const {id} = req.params;
    const {nombre,categoria,descripcion,precio,talle,color,imagen,stock} = req.body;
    if(!nombre || !categoria || !descripcion || !precio || !talle || !color || !imagen || !stock){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    const productosAct = await updateProducto(id, 
    {
      nombre,
      categoria,
      descripcion,
      precio,
      talle,
      color,
      imagen,
      stock
    })

    if(!productosAct){
        return res.status(404).json({message: 'Producto no encontrado'});
    }

    res.json(productosAct);
}

export const eliminarProducto = async (req,res) => {
    const {id} = req.params;
    const productoEliminado = await deleteProducto(id);

    if(!productoEliminado){
        return res.status(404).json({message: 'Producto no encontrado'});
    }

    res.json(
        {message: 'Producto eliminado correctamente',
         producto: productoEliminado
        }  
    )
}