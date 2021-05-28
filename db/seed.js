const db = connect("mongodb://localhost:27017/dev_db");

const { readJSON } = require('./json-manager')
const cardSeeds = readJSON()

db.cards.drop();

db.cards.insertMany(
    cardSeeds
);