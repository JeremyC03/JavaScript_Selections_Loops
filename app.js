console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let x = 1; x <= 100; x++){
    if (x % 2 != 0){
        console.log(x);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let x = 1; x <= 100; x++){
    if (x % 3 == 0 && x % 5 == 0){
        console.log(x, "FIZZBUZZ");
    }
    else if (x % 3 == 0){
        console.log(x, "FIZZ");
    }
    else if (x % 5 == 0){
        console.log(x, "BUZZ");
    }
    else{
        console.log(x);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("Ex 1. While Loop");
let x = 1;

while(x <= 100){
    if (x % 2 != 0){
        console.log(x);
    }
    x++;
}

console.log("Ex 2. Do While Loop");
let i = 1;

do{
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    }
    else if (i % 3 == 0){
        console.log(i, "FIZZ");
    }
    else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
    else{
        console.log(i);
    }
    i++;
}
while(i <= 100);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let x = 0; x <= n; x++){
    if(x = value){
        console.log(`"Found Value!" ${value}`)
        break;
    }
}
console.log(`"Did not find value from 0-${n}."`)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i} = "FIZZBUZZ"`);
    }
    else if (i % fizzDivisor == 0){
        console.log(`${i} = "FIZZ"`);
    }
    else if (i % buzzDivisor == 0){
        console.log(`${i} = "BUZZ"`);
    }
    else{
        console.log(i);
    }
}
console.log(`Start: ${start}, End: ${end}`);
console.log(`fizzDivisor: ${fizzDivisor}, buzzDivisor: ${buzzDivisor}`);