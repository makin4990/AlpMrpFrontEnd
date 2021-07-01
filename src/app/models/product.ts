import { ProductOption } from "./productOption";

export class Product{
    id: number;
    serialNumber: string;
    stockCode: string;
    cartId: number;
    quantity: number;
    productOptions: ProductOption[];
}