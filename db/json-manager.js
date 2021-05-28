//Use native fs module
const fs = require('fs');

//Create variable for JSON filepath
const filepath = './cah-cards-base.json';

//Create function that synchronously reads a json file
function readJSON() {
        const data = fs.readFileSync(filepath, 'utf8');
        //Parse JSON string to JSON object
        const cardData = JSON.parse(data);
        return cardData;
}

module.exports = { readJSON };