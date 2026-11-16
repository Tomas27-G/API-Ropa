import {crearUsuario,verificarUsuario} from "../models/Usuarios.js";
import bcrypt from 'bcrypt';
import {generateToken} from '../utils/token.generator.js';
export const register = async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    const usuarioExistente = await verificarUsuario(email);
    if(usuarioExistente){
        return res.status(400).json({message: 'El usuario ya existe'});
    }

    const passwordHash = await bcrypt.hash(password,10)
    
    const usuarioNuevo = await crearUsuario(email,passwordHash);
    
    if(!usuarioNuevo){
        return res.status(500).json({message: 'Error al crear el usuario'});
    }
    
    res.status(201).json(usuarioNuevo);
}

export const login = async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }

    const usuario = await verificarUsuario(email);
    if(!usuario){
        return res.status(400).json({message: 'El usuario no existe'});
    }

    const contraseñaValida = await bcrypt.compare(password,usuario.password);
    if(!contraseñaValida){
        return res.status(400).json({message: 'Contraseña incorrecta'});
    }

    const token = generateToken(usuario);
    res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token
    });
}