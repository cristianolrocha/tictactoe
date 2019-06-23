import React from 'react';
import { Provider } from 'react-redux';
import GameContainer from './containers/Game.container';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

export default App;
