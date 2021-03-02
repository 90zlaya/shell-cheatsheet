<?php

$calculatePrice = function ($price, $taxes, $description) {
    $taxes = $taxes ?? 0.05;
    $description = $description ?? 'Default item';
    $total = $price * (1 + $taxes);
    echo "$description With Tax: $$total";
    echo PHP_EOL;
};

$calculatePrice(100, 0.07, 'My 1st item');
$calculatePrice(100, 0, 'My 2nd item');
