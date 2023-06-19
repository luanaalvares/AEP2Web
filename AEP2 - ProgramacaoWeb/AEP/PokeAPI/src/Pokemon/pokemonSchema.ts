import { Schema, model } from "mongoose";

const PokeSchema = new Schema({
    name: String,
    dexEntry: Number,
    height: Number,
    weight: Number,
    status: [{
        statusName: String,
        statusValue: Number
    }],
    type: [String],
    moves: [String]
})

export default model('Pokemon', PokeSchema, 'Pokemon')
