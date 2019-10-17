import {Router} from 'express';

class PetsRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',(req, res) => res.send('Pets'));
    }
}

const petsRoutes = new PetsRoutes();
export default petsRoutes.router;