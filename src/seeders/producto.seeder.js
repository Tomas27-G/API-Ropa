import {mongoose} from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const productos = [
  {
    nombre: "Remera básica blanca",
    categoria: "Remeras",
    descripcion: "Remera de algodón suave, ideal para todos los días.",
    precio: 12999,
    talle: ["S", "M", "L", "XL"],
    color: "Blanco",
    imagen:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    stock: 25,
  },
  {
    nombre: "Campera de jean clásica",
    categoria: "Camperas",
    descripcion: "Campera de jean azul con un corte clásico y cómodo.",
    precio: 45999,
    talle: ["S", "M", "L", "XL"],
    color: "Azul",
    imagen:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    stock: 12,
  },
  {
    nombre: "Buzo oversize",
    categoria: "Buzos",
    descripcion: "Buzo abrigado de calce amplio y estilo urbano.",
    precio: 38999,
    talle: ["S", "M", "L", "XL"],
    color: "Gris",
    imagen:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    stock: 18,
  },
  {
    nombre: "Pantalón de vestir",
    categoria: "Pantalones",
    descripcion: "Pantalón de corte recto, cómodo y versátil.",
    precio: 32999,
    talle: ["38", "40", "42", "44"],
    color: "Negro",
    imagen:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    stock: 10,
  },
  {
    nombre: "Vestido floral",
    categoria: "Vestidos",
    descripcion: "Vestido liviano con estampado floral para días cálidos.",
    precio: 35999,
    talle: ["S", "M", "L"],
    color: "Floral",
    imagen:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    stock: 14,
  },
  {
    nombre: "Camisa de lino",
    categoria: "Camisas",
    descripcion: "Camisa fresca de lino, perfecta para un look casual.",
    precio: 27999,
    talle: ["S", "M", "L", "XL"],
    color: "Beige",
    imagen:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    stock: 16,
  },
  {
    nombre: "Zapatillas urbanas",
    categoria: "Calzado",
    descripcion: "Zapatillas cómodas para acompañarte todos los días.",
    precio: 54999,
    talle: ["38", "39", "40", "41", "42", "43"],
    color: "Blanco y negro",
    imagen:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    stock: 9,
  },
  {
    nombre: "Gorra clásica",
    categoria: "Accesorios",
    descripcion: "Gorra ajustable para completar cualquier outfit.",
    precio: 14999,
    talle: ["Único"],
    color: "Negro",
    imagen:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    stock: 20,
  },
];

const crearProducto = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        
        const productoCollection = mongoose.connection.collection("productos")
        
        
        await productoCollection.insertMany(productos)
    } catch (error) {
        console.log("Error en cargar los productos",error);       
    }
    finally{
     await mongoose.disconnect()
    }
}

crearProducto()