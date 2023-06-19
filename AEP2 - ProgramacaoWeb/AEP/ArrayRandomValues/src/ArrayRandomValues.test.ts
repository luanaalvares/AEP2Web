import { ArrayRandomValues } from "./ArrayRandomValues";
import { Product } from "./Product";

describe("Validar a randomização do produto", () => {
    it("Deve randomizar a array de produtos", () => {

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

        const pListRandom1 = arrayRandomValues.getRandomProductList()
        
        expect(pListRandom1 == pList).toBeFalsy()
    })
})