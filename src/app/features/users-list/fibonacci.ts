export const fibonacci = (num: number, memo: any = {}): number => {
  memo = memo || {}
  if (memo[num]) {
    return memo[num]
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
};
