module.exports = app => {
    require('./house.routes')(app);
    require('./character.routes')(app);
}
