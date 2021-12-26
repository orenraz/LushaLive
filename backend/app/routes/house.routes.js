module.exports = app => {
    const houses = require('../controllers/house.controller.js');

    const router = require("express").Router();

    // Create a new house
    router.post("/", houses.create);

    // Retrieve all houses
    router.get("/", houses.findAll);

    // Retrieve a single house with id
    router.get("/:id", houses.findOne);

    // Update a house with id
    router.put("/:id", houses.update);

    // Delete a house with id
    router.delete("/:id", houses.delete);

    // Create a new house
    router.delete("/", houses.deleteAll);

    app.use('/api/houses', router);
};
