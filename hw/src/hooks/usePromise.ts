import { useEffect, useState } from 'react';

/**
 * @returns resolvedValue or `undefined` otherwise
 */
const usePromise = <T>(promise: Promise<T>): T | undefined => {
  const [resolvedValue, setResolvedValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    promise.then(v => {
      setResolvedValue(v);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resolvedValue;
};

export default usePromise;
