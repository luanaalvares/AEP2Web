import { matemagicaErrors } from "./matemagicaErrors";

export class Matemagica{
    private x: number
    private y: number

    public getX(){
        return this.x;
    }

    public setX(value){
        if(typeof value != "number"){
            throw new Error(matemagicaErrors.INVALID_VALUE)
        }
        else{
            this.x = value
        }
    }
    

    public getY(){
        return this.y;
    }

    public setY(value){
        if(typeof value != "number"){
            throw new Error(matemagicaErrors.INVALID_VALUE)
        }
        else{
            this.y = value
        }
    }


    private Sum(){
        return this.x + this.y
    }

    public getSum(){
        return this.Sum();
    }


    private Subtraction(){
        return this.x - this.y
    }

    public getSubtraction(){
        return this.Subtraction()
    }
}