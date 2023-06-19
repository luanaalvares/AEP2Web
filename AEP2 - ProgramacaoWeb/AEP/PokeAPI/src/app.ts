import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App{
    public express = express.application

    public constructor(){
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void{
        this.express.use(express.json())
    }

    public routes(): void {
        this.express.use(routes)
    }

    public async database() {
        try{
            mongoose.set("strictQuery", true)
            await mongoose.connect("mongodb://0.0.0.0:27017/AEPWEB")
            console.log("Database connection started")
        }catch(err){
            console.log("Database connection failed! ", err)
        }
    }
}

export default new App().express