import { useEffect, useState } from 'react';

/**
 * @returns `[isResolved, resolvedValue]`
 */
const usePromise = <T>(promise: Promise<T>): T | undefined => {
  const [resolvedValue, setResolvedValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    promise.then(v => {
      setResolvedValue(v);
    });
  }, []);

  return resolvedValue;
};

export default usePromise;
