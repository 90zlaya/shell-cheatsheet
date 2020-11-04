# Array Methods
> Work with arrays in JavaScript

Read more about [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Table of Contents

1. [Data Object](#data-object)
1. [Find Method](#find-method)
1. [Filter Method](#filter-method)
1. [Map Method](#map-method)
1. [Reduce Method](#reduce-method)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Data Object

We're starting with Formula 1 champions list:

```js
// List of F1 Champions with 4 or more championships
const formulaOneChampions = [
    {
        name: 'Michael Schumacher',
        country: 'Germany',
        championships: 7,
        winning_seasons: [1994, 1995, 2000, 2001, 2002, 2003, 2004]
    },
    {
        name: 'Lewis Hamilton',
        country: 'Great Britain',
        championships: 6,
        winning_seasons: [2008, 2014, 2015, 2017, 2018, 2019]
    },
    {
        name: 'Juan Manuel Fangio',
        country: 'Argentina',
        championships: 5,
        winning_seasons: [1951, 1954, 1955, 1956, 1957]
    },
    {
        name: 'Alain Prost',
        country: 'France',
        championships: 4,
        winning_seasons: [1985, 1986, 1989, 1993]
    },
    {
        name: 'Sebastian Vettel',
        country: 'Germany',
        championships: 4,
        winning_seasons: [2010, 2011, 2012, 2013]
    }
];
```

Then we're going to use methods to get specific data from this data object.

[⬆ back to top](#table-of-contents)

2. ### Find Method

```js
// Get champion for season 1989
const championFromYear = formulaOneChampions.find((champion) => {
    return champion.winning_seasons.includes(1989);
});
```

[⬆ back to top](#table-of-contents)

3. ### Filter Method

```js
// Get all champions from Germany
const championsFromCountry = formulaOneChampions.filter((champion) => {
    return Object.is(champion.country, 'Germany');
});
```

[⬆ back to top](#table-of-contents)

4. ### Map Method

```js
// Get all winning seasons from oldest to newest
const allWinningSeasons = formulaOneChampions.map((champion) => {
    return champion.name;
});
```

[⬆ back to top](#table-of-contents)

5. ### Reduce Method

Method `reduce` is used in combination with `map` and `sort`. We want to get all winning seasons by using `map`, but this is array with arrays of winning seasons. We need to reduce them to one array of all winning seasons by using `reduce` method. Finally, we want all years alligned chronologically and `sort` method helps us to achieve this.

```js
// Get all winning seasons from oldest to newest
const allWinningSeasons = formulaOneChampions.map((champion) => {
    return champion.winning_seasons;
}).reduce((previous, current) => {
    return previous.concat(current);
}).sort();
```

[⬆ back to top](#table-of-contents)