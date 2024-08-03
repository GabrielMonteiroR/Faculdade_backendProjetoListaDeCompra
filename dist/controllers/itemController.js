"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itemService_1 = __importDefault(require("../service/itemService"));
const getAllItems = async (req, res) => {
    try {
        const tasks = await itemService_1.default.getAllItems();
        res.json(tasks);
    }
    catch {
        res.status(404).json({ message: "not found." });
    }
};
const createitem = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        if (!isNaN(quantity) || quantity < 0) {
            return res.status(400).json({ message: 'Invalid quantity.' });
        }
        const newItem = await itemService_1.default.createItem({
            name,
            quantity: quantity
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ message: "Server internal error" });
    }
};
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, bought } = req.body;
        if (!isNaN(quantity) || quantity < 0) {
            return res.status(400).json({ message: 'Invalid quantity.' });
        }
        const updatedItem = await itemService_1.default.updateItem(id, { name, quantity, bought });
        res.json(updateItem);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
};
const deleteitem = async (req, res) => {
    try {
        const { id } = req.params;
        await itemService_1.default.deleteItem(id);
        res.json({ message: "Item sucessfull deleted." });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
};
exports.default = {
    getAllItems,
    updateItem,
    deleteitem,
    createitem
};
//# sourceMappingURL=itemController.js.map