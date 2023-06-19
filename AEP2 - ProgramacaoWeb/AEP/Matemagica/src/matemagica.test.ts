import { Matemagica } from "./matemagica";
import { matemagicaErrors } from "./matemagicaErrors";

describe("Getter and Setter de x", () => {
    it("Deve atribuir um valor numerico para x", () => {
        const matemagica = new Matemagica()
        matemagica.setX(10)
        const valor = matemagica.getX()
        expect(valor).toBe(10) 
    })

    it("Deve lançar um erro caso o valor do setter não seja numerico", () => {
        const matemagica = new Matemagica()
        expect(() => {
            matemagica.setX("NaN")
        }).toThrow(matemagicaErrors.INVALID_VALUE)
    })
})

describe("Getter and Setter de y", () => {
    it("Deve atribuir um valor numerico para y", () => {
        const matemagica = new Matemagica()
        matemagica.setY(10)
        const valor = matemagica.getY()
        expect(valor).toBe(10) 
    })

    it("Deve lançar um erro caso o valor do setter não seja numerico", () => {
        const matemagica = new Matemagica()
        expect(() => {
            matemagica.setY("NaN")
        }).toThrow(matemagicaErrors.INVALID_VALUE)
    })
})

describe("Métodos de cálculo", () => {
    it("Deve realizar a soma entre as propiedades X e Y", () => {
        const matemagica = new Matemagica()
        matemagica.setX(10)
        matemagica.setY(5)
        const valor = matemagica.getSum()
        expect(valor).toBe(15)
    })

    it("Deve realizar a subtração entre as propiedades X e Y", () => {
        const matemagica = new Matemagica()
        matemagica.setX(10)
        matemagica.setY(5)
        const valor = matemagica.getSubtraction()
        expect(valor).toBe(5)
    })
})