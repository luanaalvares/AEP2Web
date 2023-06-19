import {Router} from 'express'
import pokemonController from './Pokemon/pokemonController'
import trainerController from './Trainer/trainerController'

const routes = Router()

//Pokemon routes
routes.post('/SaveAllPokemonToDB', pokemonController.SaveAllPokemonToDB)
routes.post('/SavePokemonByType', pokemonController.SavePokemonByType)

routes.get('/PokemonByName', pokemonController.PokemonByName)
routes.get('/PokemonByDex', pokemonController.PokemonByDex)
routes.get('/PokemonByType', pokemonController.PokemonByType)

//Trainer rotues
routes.post('/Team', trainerController.NewTeam)

routes.get('/Teams', trainerController.Teams)
routes.get('/TeamByName', trainerController.TeamByName)

routes.put('/UpdateTeam', trainerController.UpdateTeam)

routes.delete('/Team', trainerController.DeleteTeam) 

export default routes