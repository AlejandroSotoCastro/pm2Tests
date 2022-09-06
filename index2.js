function test() {
  setTimeout(() => {
    console.log(" test number2");
    test();
  }, 1000);
}

test();
