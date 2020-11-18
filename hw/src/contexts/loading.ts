import { createContext } from 'react';

interface LoadingContext {
  setIsLoading: (val: boolean) => void;
  isLoading: boolean;
}

const loadingContext = createContext<LoadingContext>({
  setIsLoading: (_) => {},
  isLoading: false,
});

export default loadingContext;
