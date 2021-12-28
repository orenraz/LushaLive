require('dotenv').config();
const db = require('./app/models');
const mockHouses = require('./mock/houses');
const mockCharacters = require('./mock/characters');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database!');
        const seedDB = async () => {
            await db.characters.deleteMany({});
            await db.characters.insertMany(mockCharacters);
            await db.houses.deleteMany({});
            await db.houses.insertMany(mockHouses);
        }
        seedDB().then(() => {
            console.log('DB seeded, closing connection');
            db.mongoose.connection.close();
        })
    })
    .catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });





