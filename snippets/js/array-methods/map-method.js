const formulaOneChampions = require('./data-object.js');

// Get all winning champions
const allWinningChampions = formulaOneChampions.map((champion) => {
    return champion.name;
});

console.log('All winning champions', allWinningChampions);
