const db = require('../models');
const House = db.houses;

// Create and Save a new House
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a House
    const house = new House({
        name: req.body.name,
        url: req.body.url,
        region: req.body.region,
        coatOfArms: req.body.coatOfArms,
        words: req.body.words,
        titles: req.body.titles,
        seats: req.body.seats,
        currentLord: req.body.currentLord,
        image: req.body.image,
        swornMembers: req.body.swornMembers
    });

    // Save House in the database
    house
        .save(house)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the House."
            });
        });
};

// Retrieve all Houses from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    House.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving houses."
            });
        });
};

// Find a single House with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    House.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found House with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving House with id=" + id });
        });
};

// Update a House by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    House.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update House with id=${id}. Maybe House was not found!`
                });
            } else res.send({ message: "House was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating House with id=" + id
            });
        });
};

// Delete a House with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    House.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete House with id=${id}. Maybe House was not found!`
                });
            } else {
                res.send({
                    message: "House was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete House with id=" + id
            });
        });
};

// Delete all Houses from the database.
exports.deleteAll = (req, res) => {
    House.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Houses were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all houses."
            });
        });
};
