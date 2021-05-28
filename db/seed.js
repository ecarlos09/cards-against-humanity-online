const db = connect("mongodb://localhost:27017/dev_db");

// const { readJSON } = require('./json-manager')
// const cardSeeds = readJSON()

db.cards.drop();

db.cards.insertMany([
    {text:"\"Tweeting.\"", type: "white"},
    {text:"(I am doing Kegels right now.)", type: "white"},
    {text:"10,000 Syrian refugees.", type: "white"}
]);