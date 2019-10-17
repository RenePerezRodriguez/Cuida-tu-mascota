"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PetsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Pets'));
    }
}
const petsRoutes = new PetsRoutes();
exports.default = petsRoutes.router;
