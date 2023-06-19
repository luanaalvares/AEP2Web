import pokemonService from "./pokemonService";
import { Request, Response } from "express";

class PokemonController{
    async SaveAllPokemonToDB(req: Request, res: Response){
        try{
            await pokemonService.SaveAllPokemonToDB()
            return res.status(201).send("Pokemon salvos no banco de dados com sucesso")
        }catch(err){
            console.log("Error! ", err)
            return res.status(500).send(err)
        }
    }

    async SavePokemonByType(req: Request, res: Response){
        try{
            const pokeByType = await pokemonService.SavePokemonByType()
            return res.status(201).send(pokeByType)
        }catch(err){
            console.log("Error! " + err)
            return res.status(500).send(err)
        }
    }

    async PokemonByName(req: Request, res: Response){
        try{
            const pokemon = await pokemonService.PokemonByName(req.body)
            return res.status(200).send(pokemon)
        }catch(err){
            console.log("Error! " + err)
            return res.status(500).send(err.message)
        }
    }

    async PokemonByDex(req: Request, res: Response){
        try{
            const pokemon = await pokemonService.PokemonByDex(req.body)
            return res.status(200).send(pokemon)
        }catch(err){
            console.log("Error! " + err)
            return res.status(500).send(err.message)
        }
    }

    async PokemonByType(req: Request, res: Response){
        try{
            const pokemonList = await pokemonService.PokemonByType(req.body)
            return res.status(200).send(pokemonList)
        }catch(err){
            console.log("Error! " + err)
            return res.status(500).send(err.message)
        }
    }
}

export default new PokemonController()