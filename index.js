import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routesProductos from "./src/routes/routesProductos.js";
import routesAuth from "./src/routes/auth.routes.js";
import mongoose from "mongoose";
const app = express();
dotenv.config();



app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>API de ropa</h1>
    <p>Bienvenido a mi API</p>
  `);
});

await mongoose.connect(process.env.MONGODB_URI);

app.use("/api/producto", routesProductos);
app.use("/api/auth", routesAuth);
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})