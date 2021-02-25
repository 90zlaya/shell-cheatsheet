const formulaOneChampions = require('./data-object.js');

// Get all winning seasons from oldest to newest
const allWinningSeasons = formulaOneChampions.map((champion) => {
    return champion.winning_seasons;
}).reduce((previous, current) => {
    return previous.concat(current);
}).sort();

console.log('All winning seasons', allWinningSeasons);
