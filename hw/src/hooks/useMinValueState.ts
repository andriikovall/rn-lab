import { useState } from 'react';

const useMinValueState = (initialValue: number, minValue: number): [number, (newVal: number) => void] => {
  const [val, setVal] = useState(initialValue);
  const newSetter = (newVal: number) => {
    if (newVal < minValue) {
      setVal(minValue);
    } else {
      setVal(newVal);
    }
  };

  return [val, newSetter];
};

export default useMinValueState;
