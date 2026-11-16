import moose from 'mongoose';

const productosSchema = new moose.Schema({
    nombre: String,
    categoria: String,
    descripcion: String,
    precio: Number,
    talle: [String],
    color: String,
    imagen: String,
    stock: Number
    
});

const Productos = moose.model('productos', productosSchema);

export const conseguirProductos = async () => {
    return await Productos.find();
}

export const conseguirProductoPorId = async (id) => {
    return await Productos.findById(id);
}

export const createProducto = async (productos) => {
    return await Productos.create(productos)
}

export const updateProducto = async(id,producto) => {
    return await Productos.findByIdAndUpdate(id,producto,{new: true})
}

export const deleteProducto = async (id) => {
    return await Productos.findByIdAndDelete(id)
}   