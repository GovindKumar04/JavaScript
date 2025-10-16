function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);

    inner2();
    console.log(counter);
  }
  function inner2() {
    counter++;
  }

  return inner;
}
console.log(outer()());
console.log(outer());
const count = outer();
count();
count();
count();
