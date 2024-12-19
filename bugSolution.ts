function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addStringNumbers(a: string, b: string): number {
  return parseFloat(a) + parseFloat(b);
}

function subtractStringNumbers(a: string, b: string): number {
  return parseFloat(a) - parseFloat(b);
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

let result3 = addStringNumbers("5","3"); // result3 is 8
let result4 = subtractStringNumbers("10","5"); // result4 is 5

console.log(result1,result2,result3,result4); //outputs 8 5 8 5