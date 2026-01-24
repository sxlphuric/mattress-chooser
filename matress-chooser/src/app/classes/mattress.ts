import { Tags } from "./tags";

export class Mattress {
    brand!: string;
    model!: string;
    tags!: Tags;
    price!: number;
    constructor(brand: string, model: string, tags: Tags, price: number) {
        this.brand = brand
        this.model = model
        this.tags = tags
        this.price = price
    }
}
