const numberInRange = (num: number, a: number, b: number, strict: boolean = false): boolean => {
  return strict
    ? (num > a && num < b)
    : (num >= a && num <= b);
};

export default numberInRange;
