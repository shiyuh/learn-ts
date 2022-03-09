import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(response => {
  console.log(response.data);
})

// to compile: tsc index.ts
// to run: node index.js
// 2 in 1: ts-node index.ts