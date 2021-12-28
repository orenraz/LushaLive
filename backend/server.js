require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./app/db')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.init();
require('./app/routes')(app);

// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
