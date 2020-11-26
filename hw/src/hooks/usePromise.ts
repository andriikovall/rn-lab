/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

/**
 * @returns resolvedValue or `undefined` otherwise, setter for it and `boolean` flag `isFinished`
 */
const usePromise = <T>(promise: Promise<T>):
  [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, boolean] => {
  const [resolvedValue, setResolvedValue] = useState<T | undefined>(undefined);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    promise.then(v => {
      setIsFinished(true);
      setResolvedValue(v);
    });
  }, []);

  return [resolvedValue, setResolvedValue, isFinished];
};

export default usePromise;
