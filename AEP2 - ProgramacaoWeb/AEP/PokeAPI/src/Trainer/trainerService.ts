import trainerSchema from "./trainerSchema"
import pokemonSchema from "../Pokemon/pokemonSchema"

class trainerService{

    async DeleteTeam(trainerInfo){
        const trainer = await trainerSchema.findOneAndDelete({"name" : trainerInfo.name})
        if(trainer == undefined){
            throw new Error("Treinador não encontrado")
        }
        return trainer
    }

    async UpdateTeam(trainerInfo){

        const trainer = await trainerSchema.findOne({"name" : trainerInfo.name})
        if(trainer == undefined){
            throw new Error("Treinador não encontrado")
        }

        if(trainerInfo.pokemon.length > 6 || trainerInfo.pokemon.length < 1){
            throw new Error('Informe um número válido de pokemons')
        }

        for(const poke of trainerInfo.pokemon){
            const pokemon = await pokemonSchema.findOne({"name" : poke})
            if(pokemon == undefined){
                throw new Error('Pokemon invalido informado, informe pokemon validos.')
            }
        }

        trainerSchema.updateOne({"name": trainerInfo.name}, {"pokemon" : trainerInfo.pokemon})
            .then((res) => {
                console.log("Treinador atualizado com sucesso")
            })
            .catch((err) => {
                throw new Error('Erro ao atualizar treinador.')
            })
    }

    async TeamByName(trainerName){
        const team = await trainerSchema.findOne({"name" : trainerName.name})
        return team
    }

    async Teams(){
        return await trainerSchema.find()
    }

    async NewTeam(reqTrainer){
        const trainer = await trainerSchema.findOne({"name" : reqTrainer.name})
        if(reqTrainer.pokemon.length > 6 || reqTrainer.pokemon.length < 1){
            throw new Error('Informe um número válido de pokemons')
        }
        
        for(const poke of reqTrainer.pokemon){
            const pokemon = await pokemonSchema.findOne({"name" : poke})
            if(pokemon == undefined){
                throw new Error('Pokemon invalido informado, informe pokemon validos.')
            }
        }
        
        if(trainer == undefined){
            await trainerSchema.create({
                name: reqTrainer.name,
                pokemon: reqTrainer.pokemon
            })
        }else{
            throw new Error('Treinador já cadastrado no banco de dados, utilize a rota de atualizar o time para modificar o mesmo')
        }
    };
};

export default new trainerService()