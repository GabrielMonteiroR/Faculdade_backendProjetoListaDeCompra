class Item {
    id: number;
    name: string;
    quantity: number;
    bought: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, quantity: number, bought: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.bought = bought;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default Item;