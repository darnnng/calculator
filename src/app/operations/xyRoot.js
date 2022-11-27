export const xyRoot = (prev, current) => {
  try {
    if ((prev < 0 && current % 2 === 0) || current === 0) {
      throw new SyntaxError('Incorrect input');
    }
  } catch (e) {
    alert('Error. Incorrect input');
    console.error(e);
    return 0;
  }

  return prev ** (1 / current);
};
