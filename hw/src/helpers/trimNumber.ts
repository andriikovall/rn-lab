const trimNumber = (num: number, min: number, max: number): number => {
  if (num > max) {
    return max;
  }
  if (num < min) {
    return min;
  }
  return num;
};

export default trimNumber;
