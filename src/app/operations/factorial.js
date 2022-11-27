export const factorial = (x) => {
  x = +x;
  try {
    if (x < 0 || !Number.isInteger(x)) {
      throw new SyntaxError('Incorrect input');
    }
  } catch (e) {
    alert('Error. Incorrect input');
    console.error(e);
    return 0;
  }

  if (x > 101) return 'Error';

  let res = 1;
  for (let i = 2; i <= +x; i++) {
    res *= i;
  }

  return res;
};
