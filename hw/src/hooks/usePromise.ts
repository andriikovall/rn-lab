/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

/**
 * @returns resolvedValue or `undefined` otherwise and setter for it
 */
const usePromise = <T>(promise: Promise<T>): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [resolvedValue, setResolvedValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    promise.then(v => {
      setResolvedValue(v);
    });
  }, []);

  return [resolvedValue, setResolvedValue];
};

export default usePromise;
