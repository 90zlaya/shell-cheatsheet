<?php

$superheroes = [
    [
        'name' => 'Tony',
        'surname' => 'Stark',
        'role' => 'Iron Man'
    ],
    [
        'name' => 'Peter',
        'surname' => 'Parker',
        'role' => 'Spiderman'
    ],
    [
        'name' => 'Natasha',
        'surname' => 'Romanoff',
        'role' => 'Black Widow'
    ]
];

$superheroRoles = array_map(fn ($superhero) => $superhero['role'], $superheroes);

var_dump($superheroRoles);
