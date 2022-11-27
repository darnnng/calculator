export const onex = (x) => {
  try {
    if (x === '0') {
      throw new SyntaxError('Incorrect input');
    }
  } catch (e) {
    alert('Error. Incorrect input');
    console.error(e);
    return 0;
  }

  return 1 / x;
};
