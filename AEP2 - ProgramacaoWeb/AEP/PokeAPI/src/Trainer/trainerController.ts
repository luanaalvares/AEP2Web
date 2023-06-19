import trainerService from "./trainerService"
import { Request, Response } from "express";

class trainerController{

    async DeleteTeam(req: Request, res: Response){
        try{
            const team = await trainerService.DeleteTeam(req.body)
            return res.status(201).send(team)
        }catch(err){
            console.log(err)
            return res.status(500).send(err.message)
        }
    }

    async UpdateTeam(req: Request, res:Response){
        try{
            await trainerService.UpdateTeam(req.body)
            return res.status(201).send()
        }catch(err){
            console.log(err)
            return res.status(500).send(err.message)
        }
    }

    async TeamByName(req: Request, res: Response){
        try{
            const team = await trainerService.TeamByName(req.body)
            return res.status(201).send(team)
        }catch(err){
            console.log(err)
            return res.status(500).send(err.message)
        }
        
    }

    async Teams(req: Request, res: Response){
        try{
            const teamList = await trainerService.Teams()
            return res.status(201).send(teamList)
        }catch(err){
            console.log(err)
            return res.status(500).send(err.message)
        }
    }

    async NewTeam(req: Request, res: Response){
       try{
           await trainerService.NewTeam(req.body)
           return res.status(201).send("Treinador salvo no banco de dados com sucesso")
       }catch(err){
            console.error(err);
            return res.status(500).send(err.message);
       }
    }

}

export default new trainerController()