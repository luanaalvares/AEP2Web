import { Product } from "./Product";

export class ArrayRandomValues{
    private ProductList: Product[]

    constructor(productList: Product[]){
        this.ProductList = productList
    }

    public getProductList(): Product[]{
        return this.ProductList
    }

    public setProductList(productList: Product[]){
        this.ProductList = productList
    }

    public getRandomProductList(): Product[]{
        let randomProductList: Product[] = []
        while(randomProductList.length != this.ProductList.length){
            let randomValue = Math.floor(Math.random() * this.ProductList.length)
            if(!randomProductList.includes(this.ProductList[randomValue])){
                randomProductList.push(this.ProductList[randomValue])
            }
        }
        return randomProductList
    }


}