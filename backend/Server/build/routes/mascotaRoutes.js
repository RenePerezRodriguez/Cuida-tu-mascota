"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MascotaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/mascota/', (req, res) => res.send('Mascota'));
    }
}
const mascotaRoutes = new MascotaRoutes();
exports.default = mascotaRoutes.router;
