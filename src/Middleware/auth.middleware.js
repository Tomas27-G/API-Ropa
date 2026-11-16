import dotenv from "dotenv"
dotenv.config()

import jwt from 'jsonwebtoken';

export const authMidd = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'No se proporcionó un token de autenticación'});
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Token de autenticación inválido'});
    }

    try {
        const decoded = jwt.verify(token, process.env.jwt_secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Token de autenticación inválido'});
    }

}