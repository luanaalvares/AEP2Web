import PokeSchema from "./pokemonSchema";
import { writeFile, readFile } from "fs/promises";

class PokemonService{

    public async PokemonByType(req){
        const pokeList = await PokeSchema.find()
        let result : any[] = []
        for(const poke of pokeList){
            for(const type of poke.type){
                if(type == req.type){
                    result.push(poke)
                }
            }
        }
        return result
    }

    public async PokemonByDex(reqDex){
        const pokemon = await PokeSchema.findOne({"dexEntry": reqDex.dexEntry})
        if(pokemon == undefined){
            throw new Error ("Pokemon nao encontrado")
        }
        return pokemon
    }

    public async PokemonByName(reqName){
        const pokemon = await PokeSchema.findOne({"name": reqName.name})
        if(pokemon == undefined){
            throw new Error("Pokemon nao encontrado")
        }
        return pokemon
    }

    public async SavePokemonByType(){
        const pokeList = await this.GetAllPokeFromDB()
        
        const typeArr: { [key: string]: string[] } = pokeList.reduce((tipos, pokemon) => {
            pokemon.type.forEach(tipo => {
              if (!tipos[tipo]) {
                tipos[tipo] = [];
              }
              tipos[tipo].push(pokemon.name);
            });
            return tipos;
          }, {});
        await writeFile('pokemonByType.json', JSON.stringify(typeArr, null, 2))
        console.log(typeArr)
        return typeArr
    }

    public async GetAllPokeFromDB(){
        return await PokeSchema.find()
    }

    public async SaveAllPokemonToDB(){
        let pokeAPIResponse = await this.PokeAPIFetch()

        let pokeList : any[] = []
        for(const poke of pokeAPIResponse.results){
            const response = await fetch(poke.url)
            const pokeInfo = await response.json()

            const name = pokeInfo.name

            let types : any[] = []
            pokeInfo.types.forEach(type => {
                types.push(type.type.name)
            })

            let status : any[] = []
            pokeInfo.stats.forEach(stat => {
                let newStat = {
                    statusName: stat.stat.name,
                    statusValue: stat.base_stat
                }
                status.push(newStat)
            })

            const dexNumber = pokeInfo.id

            const height = pokeInfo.height / 10

            const weight = pokeInfo.weight / 10

            let selectedMoves : any = []
            if(pokeInfo.moves.length > 4){
                while(selectedMoves.length < 4){
                    let randomValue = Math.floor(Math.random() * pokeInfo.moves.length)
                    if(!selectedMoves.includes(pokeInfo.moves[randomValue].move.name))
                        selectedMoves.push(pokeInfo.moves[randomValue].move.name)
                }
            }
            else{
                for(const moves of pokeInfo.moves){
                    selectedMoves.push(moves.move.name)
                }
            }

            let newPoke = new PokeSchema({
                name: name,
                type: types,
                status: status,
                dexEntry: dexNumber,
                height: height,
                weight: weight,
                moves: selectedMoves
            })
            pokeList.push(newPoke)
        }

        console.log(pokeList)
        await PokeSchema.insertMany(pokeList)
        await writeFile('pokemonList.json', JSON.stringify(pokeList, null, 2))
        .then( () => console.log("Pokemons inseridos com sucesso!") )
        .catch((err) => {
            console.log(err)
            throw new Error("Falha ao salvar os Pokemon no banco de dados")
        })
    }

    private async PokeAPIFetch(){
        let pokeAPIResponse
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            pokeAPIResponse = data  
        })
        return pokeAPIResponse
    }
}

export default new PokemonService()