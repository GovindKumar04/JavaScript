function restOperator(val1, val2, ...restOpt){
    return (val1, restOpt, val2)
}

console.log(restOperator(1,2,5,3));

