function restOperator(val1, val2, ...restOpt){
    return (val1, restOpt, val2)
}

console.log(restOperator(1,2,5,3));


let arr= [1,2,3];

arr.forEach(ele => ele*2);
console.log(arr);
let a=arr.map(ele => ele*2);
console.log(a);



