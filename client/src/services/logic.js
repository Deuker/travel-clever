// Here we going to define the logic of the 

// input km from route --> receive co2 emission (kg) per kilometer

let km = 100;
let co2PerKilometer = 200;

// let resultKiloCo2PerKilometer = ((km * co2PerKilometer)/1000).toFixed(2);
const resultKiloCo2PerKilometer = (km, co2PerKilometer) => ((km * co2PerKilometer)/1000).toFixed(2);

// let plantedTrees = (resultKiloCo2PerKilometer / 23.2).toFixed(2);
const treesToPlant = (resultKiloCo2PerKilometer) => (resultKiloCo2PerKilometer/23.2).toFixed(2);



// let text1 = `Instead of driving ${km} kilometers by car - you already saved ${resultKiloCo2PerKilometer} kilograms CO2!`
// let text2 = `If you would have taken the car instead of bike - you should have planted ${plantedTrees} trees to compensate your CO2 emissions within a year`
// console.log(text1);
// console.log(text2);


// over 40 years a tree can compensate one tonne of co2
// if you would have taken the car instead of bike - you should have planted X trees to compensate your CO2 emissions within a year