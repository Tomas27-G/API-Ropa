import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (user) => {
    const payload = {
        id: user._id
    }

    return jwt.sign(payload, process.env.jwt_secret, { expiresIn: '10m' });
}