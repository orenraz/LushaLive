require('dotenv').config();
const db = require('./app/models');
const mockHouses = require('./mock/houses');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database!');
        const seedDB = async () => {
            await db.houses.deleteMany({});
            await db.houses.insertMany(mockHouses);
        }
        seedDB().then(() => {
            db.mongoose.connection.close();
        })
    })
    .catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });





