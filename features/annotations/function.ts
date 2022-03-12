const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiple = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// very rare: when you never expect a function to return anything (always exit early)
const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError2 = (message: string): string => {
  if (!message) throw new Error("nothing");
  return message;
}

const todayForecast = {
  date: new Date(),
  weather: 'sunny'
};

// destructuring
const logWeather = ({ date, weather}: {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather);
}

logWeather(todayForecast);


