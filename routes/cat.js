import express from 'express';
import catControllers from '../controllers/cat.js';
// making router as a small express
const router = express.Router();

router.get('/',catControllers.getCats);
router.get('/:id',catControllers.getCatById);
router.post('/',catControllers.addCat);
router.put('/:id',catControllers.updateCat);
router.delete('/:id',catControllers.deleteCat);





// routes

export default router;
