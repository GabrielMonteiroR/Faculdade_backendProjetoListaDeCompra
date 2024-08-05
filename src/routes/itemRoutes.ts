import express, { Router } from 'express';
import itemController from '../controllers/itemController';

const router: Router = express.Router();

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

export default router;
