"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllItems = async () => {
    return await prisma.item.findMany();
};
const createItem = async (itemData) => {
    return await prisma.item.create({
        data: itemData
    });
};
const updateItem = async (id, updatedItem) => {
    return await prisma.item.update({
        where: { id: Number(id) },
        data: updatedItem
    });
};
const deleteItem = async (id) => {
    return await prisma.item.delete({
        where: { id: Number(id) }
    });
};
exports.default = {
    getAllItems,
    createItem,
    deleteItem,
    updateItem
};
//# sourceMappingURL=itemService.js.map