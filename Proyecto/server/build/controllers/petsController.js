"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PetsController {
    list(req, res) {
        res.json({ text: 'listing a games' });
    }
    getOne(req, res) {
        res.json({ text: 'this is game ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'Creating a game' });
    }
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game ' + req.params.id });
    }
}
exports.petsController = new PetsController();
