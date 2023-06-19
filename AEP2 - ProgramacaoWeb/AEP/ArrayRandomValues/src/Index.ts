import { ArrayRandomValues } from "./ArrayRandomValues";
import { Product } from "./Product";

function main(){

    const pList: Product[] = [
        new Product("Caneta", 7.99, 10),
        new Product("Impressora", 649.50, 0),
        new Product("Caderno", 27.10, 4),
        new Product("Lapis", 5.82, 3),
        new Product("Tesoura", 19.99, 1),
        new Product("Mochila", 150.99, 6),
        new Product("Teclado", 500.99, 4),
        new Product("Mouse", 78.99 , 3),
        new Product("Tenis", 350.99, 2),
        new Product("Meias", 19.99 , 10)
    ]

    const arrayRandomValues = new ArrayRandomValues(pList)
    let randomProduct1 = arrayRandomValues.getRandomProductList();
    let randomProduct2 = arrayRandomValues.getRandomProductList();
    let randomProduct3 = arrayRandomValues.getRandomProductList();

    randomProduct1.forEach(item => {
        console.log(item.getName())
    })
    console.log("\n")

    randomProduct2.forEach(item => {
        console.log(item.getName())
    })
    console.log("\n")

    randomProduct3.forEach(item => {
        console.log(item.getName())
    })

}

main()