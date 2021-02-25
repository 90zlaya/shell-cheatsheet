const formulaOneChampions = require('./data-object.js');

// Get champion for season 1989
const season = 1989;
const championFromYear = formulaOneChampions.find((champion) => {
    return champion.winning_seasons.includes(season);
});

console.log(`Champion for season ${ season }`, championFromYear);
