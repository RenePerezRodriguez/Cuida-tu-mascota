import {Router} from 'express';

class MascotaRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/mascota/',(req,res) => res.send('Mascota'));
    }
}
const mascotaRoutes = new MascotaRoutes();
export default mascotaRoutes.router;