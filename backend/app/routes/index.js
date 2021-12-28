module.exports = app => {
    require('./health.routes')(app);
    require('./house.routes')(app);
    require('./character.routes')(app);
}
