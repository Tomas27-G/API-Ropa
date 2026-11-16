import {Router} from 'express';  
import {getProductoPorId, getProductos, postProducto, putProducto, eliminarProducto} from '../controllers/producto.controller.js';

import {authMidd} from '../Middleware/auth.middleware.js';
const router = Router();

router.get('/', getProductos);
router.get('/:id', authMidd, getProductoPorId);
router.post('/', authMidd, postProducto);
router.put('/:id', authMidd, putProducto);
router.delete('/:id', authMidd, eliminarProducto);

export default router;