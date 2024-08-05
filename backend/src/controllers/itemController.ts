import { Request, Response } from 'express';
import itemRepository from '../repository/itemRepository';
import  Item  from '../entity/Item';

const validateQuantity = (quantity: any): quantity is number => {
    return typeof quantity === 'number' && quantity >= 0;
};

const validateItem = (item: Partial<Item>): boolean => {
    const { name, quantity, bought } = item;
    return typeof name === 'string' &&
           validateQuantity(quantity) &&
           typeof bought === 'boolean';
};

const getAllItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const items: Item[] = await itemRepository.getAllItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const createItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, quantity } = req.body;

        // Validação dos dados
        if (typeof name !== 'string' || !validateQuantity(quantity)) {
            return res.status(400).json({ message: 'Invalid data.' });
        }

        const newItem = await itemRepository.createItem({ name, quantity, bought: false });

        res.status(201).json(newItem);
    } catch (error) {
        console.error(error); // Log do erro para depuração
        res.status(400).json({ message: "Invalid schema" });
    }
};

const updateItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name, quantity, bought } = req.body;

        if (isNaN(id) || !validateItem({ name, quantity, bought })) {
            return res.status(400).json({ message: 'Invalid data.' });


        }
        
        const item = await itemRepository.getItemById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found.' });
        }else if(item.bought) {
            return res.status(400).json({ message: 'cannot be deleted.' });
        }

        const updatedItem = await itemRepository.updateItem(id, { name, quantity, bought });
        res.json(updatedItem);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal server error." });
    }
};

const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID.' });
        }

        const item = await itemRepository.getItemById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found.' });
        } else if(item.bought) {
            return res.status(400).json({ message: 'cannot be deleted.' });
        }

        await itemRepository.deleteItem(id);
        res.json({ message: "Item successfully deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export default {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
};
