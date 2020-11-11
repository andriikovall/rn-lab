import { useState } from 'react';

export const useDebounce = (timer: number): (cb: () => void) => void => {
  const [currTimeout, setCurrTimeout] = useState<NodeJS.Timeout>();

  const debounce = (cb: () => void) => {
    if (currTimeout) {
      clearTimeout(currTimeout);
    }
    const newTimeout = setTimeout(() => {
      cb();
    }, timer);
    setCurrTimeout(newTimeout);
  };

  return debounce;
};
