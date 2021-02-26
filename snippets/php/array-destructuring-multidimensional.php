<?php

// Multidimensional array
$superheroes = [
    'male' => [
        [
            'name' => 'Tony',
            'surname' => 'Stark',
            'role' => 'Iron Man'
        ],
        [
            'name' => 'Peter',
            'surname' => 'Parker',
            'role' => 'Spiderman'
        ]
    ],
    'female' => [
        [
            'name' => 'Natasha',
            'surname' => 'Romanoff',
            'role' => 'Black Widow'
        ]
    ]
];

[
    'male' => $male,
    'female' => $female
] = $superheroes;

var_dump($male, $female);
