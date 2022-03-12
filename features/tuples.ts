const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [String, boolean, number];
const coke: Drink = ['brown', true, 38];

// type annotation
const pepsi: [string, boolean, number] = ['brown', true, 40]

// in general, objects are clearer :) 
const carSpecs: [number, number] = [400, 3354]

const carStats = {
  horsepower: 400,
  weight: 3354
};



