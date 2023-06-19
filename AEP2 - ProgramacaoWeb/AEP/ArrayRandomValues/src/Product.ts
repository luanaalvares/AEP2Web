export class Product{
    private name: String
    private price: Number
    private amount: Number

    public constructor(name: String, price: Number, amount: Number){
        this.name = name
        this.price = price
        this.amount = amount
    }

    public getName(): String{
        return this.name
    }

    public setName(name: String){
        this.name = name
    }

    public getPrice(): Number{
        return this.price
    }

    public setPrice(price: Number){
        this.price = price
    }

    public getAmount(): Number{
        return this.amount
    }

    public setAmount(amount: Number){
        this.amount = amount
    }

}