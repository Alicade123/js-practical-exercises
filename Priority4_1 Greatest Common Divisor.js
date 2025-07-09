const greatestCommonDivisor = (x, y) => {
  const biggest = x > y ? x : y;
  let GCD;
  for (let i = 1; i <= biggest; i++) {
    if (x % i === 0 && y % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};
console.log(greatestCommonDivisor(12, 18)); //6
