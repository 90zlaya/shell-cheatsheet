# Array Methods
> Work with arrays in JavaScript

Read more about [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Table of Contents

* [Data Object](#data-object)
* [Find Method](#find-method)
* [Filter Method](#filter-method)
* [Map Method](#map-method)
* [Reduce Method](#reduce-method)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Data Object

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
        championships: 7,
        winning_seasons: [2008, 2014, 2015, 2017, 2018, 2019, 2020]
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

Then we're going to use methods to get specific data from this [data object](../snippets/js/array-methods/data-object.js).

[⬆ back to top](#table-of-contents)

## Find Method

```js
// Get champion for season 1989
const championFromYear = formulaOneChampions.find((champion) => {
    return champion.winning_seasons.includes(1989);
});
```

Go to [JavaScript file](../snippets/js/array-methods/find-method.js) with solution.

[⬆ back to top](#table-of-contents)

## Filter Method

```js
// Get all champions from Germany
const championsFromCountry = formulaOneChampions.filter((champion) => {
    return champion.country === 'Germany';
});
```

Go to [JavaScript file](../snippets/js/array-methods/filter-method.js) with solution.

[⬆ back to top](#table-of-contents)

## Map Method

```js
// Get all winning champions
const allWinningChampions = formulaOneChampions.map((champion) => {
    return champion.name;
});
```

Go to [JavaScript file](../snippets/js/array-methods/map-method.js) with solution.

[⬆ back to top](#table-of-contents)

## Reduce Method

Method `reduce` is used in combination with `map` and `sort`. We want to get all winning seasons by using `map`, but this is array with arrays of winning seasons. We need to reduce them to one array of all winning seasons by using `reduce` method. Finally, we want all years alligned chronologically and `sort` method helps us to achieve this.

```js
// Get all winning seasons from oldest to newest
const allWinningSeasons = formulaOneChampions.map((champion) => {
    return champion.winning_seasons;
}).reduce((previous, current) => {
    return previous.concat(current);
}).sort();
```

Go to [JavaScript file](../snippets/js/array-methods/reduce-method.js) with solution.

[⬆ back to top](#table-of-contents)
