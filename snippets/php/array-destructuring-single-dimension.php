<?php

// Single dimension array
$superheroes = [
    'name' => 'Tony',
    'surname' => 'Stark',
    'role' => 'Iron Man'
];

[
    'name' => $name,
    'surname' => $surname,
    'role' => $role
] = $superheroes + [ 'role' => 'Unknown' ];

var_dump($name, $surname, $role);
