function sumFibs(num) {
  const fib = [0, 1];
  let nextFib = -Infinity;
  let oddCounter = fib[1];
  for (let i = 0; i < num; i++) {
    nextFib = fib[i] + fib[i + 1];

    if (nextFib > num) break;
    if (nextFib % 2 !== 0) {
      oddCounter += nextFib;
    }

    fib.push(nextFib);
  }
  console.log('oddCounter', oddCounter);
  return oddCounter;
}

sumFibs(10);
sumFibs(1); //  should return a number.
sumFibs(1000); //  should return 1785
sumFibs(4000000); // should return 4613732.
sumFibs(4); // should return 5.
sumFibs(75024); // should return 60696.
sumFibs(75025); // should return 135721.
