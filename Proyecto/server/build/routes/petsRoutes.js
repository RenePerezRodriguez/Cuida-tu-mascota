"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petsController_1 = require("../controllers/petsController");
class PetsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', petsController_1.petsController.list);
        this.router.get('/:id', petsController_1.petsController.getOne);
        this.router.post('/', petsController_1.petsController.create);
        this.router.put('/:id', petsController_1.petsController.update);
        this.router.delete('/:id', petsController_1.petsController.delete);
    }
}
const petsRoutes = new PetsRoutes();
exports.default = petsRoutes.router;
