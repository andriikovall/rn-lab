import React, { useState } from 'react';
import LoadingContext from '../../contexts/loading';

interface LoadingProviderProps {
  children?: any;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{
      setIsLoading: setIsLoading,
      isLoading: isLoading,
    }}>
      {children}
    </LoadingContext.Provider>
  );
}
