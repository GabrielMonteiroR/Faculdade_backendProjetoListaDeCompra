import { PrismaClient } from '@prisma/client';
import  Item  from '../entity/Item';

const prisma = new PrismaClient();

const getAllItems = async (): Promise<Item[]> => {
    return await prisma.item.findMany();
}

const createItem = async (itemData: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>): Promise<Item> => {
    return await prisma.item.create({
        data: itemData
    });
}

const updateItem = async (id: number, updatedItem: Partial<Omit<Item, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Item> => {
    return await prisma.item.update({
        where: { id },
        data: updatedItem
    });
}

const deleteItem = async (id: number): Promise<Item> => {
    return await prisma.item.delete({
        where: { id }
    });
}

export default {
    getAllItems,
    createItem,
    deleteItem,
    updateItem
};
