import express from 'express';
const router = express.Router();
import itemController from '../controllers/itemController';

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

export default router;
