const calculatePrice = (price, taxes, description) => {
    taxes = taxes ?? 0.05;
    description = description ?? 'Default item';
    const total = price * (1 + taxes);
    console.log(`${ description } With Tax: $${ total }`);
}

calculatePrice(100, 0.07, 'My 1st item');
calculatePrice(100, 0, 'My 2nd item');
calculatePrice(100, undefined);
