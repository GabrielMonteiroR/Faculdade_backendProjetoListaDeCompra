import itemService from "../service/itemService";

const getAllItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch {
        res.status(404).json({ message: "Not found." });
    }
};

const createItem = async (req, res) => {
    try {
        const { name, quantity } = req.body;

        if (isNaN(quantity) || quantity < 0) {
            return res.status(400).json({ message: 'Invalid quantity.' });
        }

        const newItem = await itemService.createItem({ name, quantity });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Server internal error" });
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, bought } = req.body;

        const updatedItem = await itemService.updateItem(id, { name, quantity, bought });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await itemService.deleteItem(id);
        res.json({ message: "Item successfully deleted." });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
};

export default {
    getAllItems,
    updateItem,
    deleteItem,
    createItem
};
