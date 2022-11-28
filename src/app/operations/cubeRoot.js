export const cubeRoot = (n) => {
  let cbrt = n / 3;
  let temp = 0;

  while (cbrt != temp) {
    temp = cbrt;
    cbrt = (n / (temp * temp) + temp * 2) / 3;
  }
  return cbrt.toFixed(5) * 1;
};
