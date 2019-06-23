import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { game } from './ducks';

const reducers = combineReducers({
  game,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, middleware);

export default store;
