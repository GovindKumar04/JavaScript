let integer = [1, 2, 3, 4, 4, 5];
let float = [1.1, 2.2, 3.3];

integer.push(...float);
let number = [...integer,...float];
console.log(integer);
console.log(number);

console.log(Array.isArray("Hitesh"));
console.log(Array(98,1));
console.log(Array.from("hitesh"));
console.log(Array.from({1:"govind"}))

let s1 = 91;
let s2= 93;
let scores = [54,98,78];
console.log(Array.of(s1,s2,...scores))

