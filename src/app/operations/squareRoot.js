export const squareRoot = (x) => {
  try {
    if (x < 0) {
      alert('Error. Incorrect input');
      throw new SyntaxError('Incorrect input');
    }
  } catch (e) {
    alert('Error. Incorrect input');
    console.error(e);
    return 0;
  }
  return x ** (1 / 2);
};
