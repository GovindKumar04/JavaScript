var x = 10;

function test() {
  console.log(x);
  let x = 20;

  if (true) {
    var y = 30;
    let z = 40;
    const w = 50;
    console.log(x, y, z, w);
  }

  console.log(typeof z);
  console.log(typeof w);
  console.log(y);
}
test();
console.log(x);
console.log(typeof y);
