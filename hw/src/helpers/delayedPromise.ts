const delayedPromise = <T>(val: T, err: any, timeout: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (err) {
        reject(err);
      } else {
        resolve(val);
      }
    }, timeout);
  });
};

export default delayedPromise;
