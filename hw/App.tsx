import React from 'react';

import SettingsProvider from './src/components/contextProviders/SettingsProvider';
import AuthProvider from './src/components/contextProviders/AuthProvider';
import LoadingProvider from './src/components/contextProviders/LoadingProvider';
import Main from './src/components/Main';
import SharedErrorBoundary from './src/components/shared/SharedErrorBoundary';

const App = () => {
  return (
    <SharedErrorBoundary>
      <LoadingProvider>
        <AuthProvider>
          <SettingsProvider>
            <Main />
          </SettingsProvider>
        </AuthProvider>
      </LoadingProvider>
    </SharedErrorBoundary>
  );
};


export default App;
