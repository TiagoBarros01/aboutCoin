import React from 'react';

import ContextProvider from './src/contexts';
import Home from './src/screens/Home';

const App = () => (
  <ContextProvider>
    <Home />
  </ContextProvider>
);

export default App;
