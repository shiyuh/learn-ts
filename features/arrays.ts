const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// especially if we initialize as empty array
const sentences: string[] = []

// 2D arrays
const carsByMake: string[][] = [
  ['f150'],
  ['corrolla'],
  ['camaro']
];

// 1) help with inference when extracting values
const car = carMakers[0];
const newCar = carMakers.pop();

// 2) prevent incompatible values
carMakers.push('new make');

// 3) help with map
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');

