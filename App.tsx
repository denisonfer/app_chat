import React from 'react';

import AuthProvider from './src/contexts/authProvider';
import WebsocketProvider from './src/contexts/websocketProvider';
import Routes from './src/routes';

import './src/configs/reactotronConfig';

const App = () => {
  return (
    <AuthProvider>
      <WebsocketProvider>
        <Routes />
      </WebsocketProvider>
    </AuthProvider>
  );
};

export default App;
