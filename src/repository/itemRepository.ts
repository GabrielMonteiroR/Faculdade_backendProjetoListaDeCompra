import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllItems = async () => {
    return await prisma.item.findMany();
}

const createItem = async (itemData) => {
    return await prisma.item.create(
        {
            data: itemData
        });
}

const updateItem = async (id, updatedItem) => {
    return await prisma.item.update({
        where: { id: Number(id) },
        data: updatedItem
    });
}


const deleteItem = async (id) => {
    return await prisma.item.delete({
        where: { id: Number(id) }
    });
}

export default {
    getAllItems,
    createItem,
    deleteItem,
    updateItem
};