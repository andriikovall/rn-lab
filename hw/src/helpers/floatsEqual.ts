const floatsEqual = (a: number, b: number, epsilon: number = 1e-4): boolean => {
  return Math.abs(a - b) < epsilon;
};

export default floatsEqual;
