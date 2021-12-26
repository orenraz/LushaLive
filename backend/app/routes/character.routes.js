module.exports = app => {
    const character = require('../controllers/character.controller.js');

    const router = require("express").Router();

    // Create a new character
    router.post("/", character.create);

    // Retrieve all character
    router.get("/", character.findAll);

    // Retrieve all died characters
    router.get("/died", character.findAllDied);

    // Retrieve a single character with id
    router.get("/:id", character.findOne);

    // Update a character with id
    router.put("/:id", character.update);

    // Delete a character with id
    router.delete("/:id", character.delete);

    // Create a new character
    router.delete("/", character.deleteAll);

    app.use('/api/characters', router);
};
