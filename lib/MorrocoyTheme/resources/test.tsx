type CalculatePrimesArgs = {
  start: number;
  end: number;
};

type CalculatePrimesResult = {
  primes: number[];
};

const calculatePrimes = ({
  start,
  end,
}: CalculatePrimesArgs): CalculatePrimesResult => {
  const primes: number[] = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return { primes };
};

const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
