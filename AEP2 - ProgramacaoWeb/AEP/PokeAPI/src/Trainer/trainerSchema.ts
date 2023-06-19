import { Schema, model } from "mongoose";

const TrainerSchema = new Schema({
    name: String,
    pokemon: [String]
})

export default model('Trainer', TrainerSchema, 'Trainer')
