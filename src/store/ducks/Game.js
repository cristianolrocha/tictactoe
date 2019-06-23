import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setPlayer: ['player'],
});

const INITIAL_STATE = {
  player: '',
};

// const setPlayer = (state: object, action: object) => ({
const setPlayer = (state, action) => ({
  ...state,
  player: action.statements,
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_PLAYER]: setPlayer,
});
