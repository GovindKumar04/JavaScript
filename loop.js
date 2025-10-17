const obj= {
    name: "Govind",
    age: 9,
    email: "nini@gmai"
}

for(let [key, value] of Object.entries(obj)){
    console.log(key,value);
    
}

const arr= [9,8,7,6,5,4]
// for in loop
for(const ele in arr){
    console.log(arr[ele]);
    
}
// for of loop
for(const ele of arr){
    console.log(ele);
    
}