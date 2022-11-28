export const division = (prev, current) => {
  try {
    if (current == 0 || !isFinite(prev)) {
      throw new SyntaxError('Incorrect input');
    }
  } catch (e) {
    alert('Error. Incorrect input');
    console.error(e);
    return 0;
  }

  return (prev / current).toFixed(5) * 1;
};
