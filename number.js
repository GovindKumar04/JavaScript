// Stored in stack
let a= 697.7;
// Stored in heap
// this is not a good practice
let b = new Number(4);
console.log(a);
console.log(typeof b);
//js automaticcaly unwraps it while perform arthimetc operation
console.log(b/2);

console.log(a.toPrecision(3))
console.log(a.toFixed(2))

// ############################ Integers #####################

let neg= -8
console.log(Math.abs(neg));

const m = [1,2,3];
m[0]=2;
m.push(8)
console.log(m);

// floor is used to remove everting after decimal
let c= Math.floor(Math.random()*10)+1;
console.log(c)

for(let i=0; i<20; i++){
    let c= (Math.random()*20)+10;
    console.log(c)
}

