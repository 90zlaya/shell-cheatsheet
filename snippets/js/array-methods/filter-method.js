const formulaOneChampions = require('./data-object.js');

// Get all champions from Germany
const country = 'Germany';
const championsFromCountry = formulaOneChampions.filter((champion) => {
    return champion.country === country;
});

console.log(`All champions from ${ country }`, championsFromCountry);
