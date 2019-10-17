import {Request, Response} from 'express';
import dbPool from '../database';

class PetsController {

    public list (req: Request, res: Response) {
        res.json({text: 'listing a games'});
    } 

    public getOne (req: Request, res: Response) {
        res.json({text: 'this is game ' + req.params.id});
    } 

    public create (req: Request, res: Response) {
        res.json({text: 'Creating a game'});
    }

    public update (req: Request, res: Response) {
        res.json({text: 'updating a game ' + req.params.id});
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'deleting a game ' + req.params.id});
    }
}

export const petsController = new PetsController();