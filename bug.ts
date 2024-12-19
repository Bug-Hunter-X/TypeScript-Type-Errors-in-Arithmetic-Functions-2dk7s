function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

console.log(result1,result2); //outputs 8 5

//Type Error
let result3 = add("5",3); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let result4 = subtract(10,"5"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.