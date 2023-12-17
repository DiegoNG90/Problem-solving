function sumPrimes(num) {
  const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    if (num === 2 || num === 3) return true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      continue;
    }
    return true;
  };

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10); // should return a number.
sumPrimes(10); // should return 17.
sumPrimes(977); //  should return 73156.
