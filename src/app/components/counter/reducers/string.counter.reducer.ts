import { createReducer, on, Action } from '@ngrx/store';
import { stringCount, stringAction } from '../actions/string.counter.action';

// interface
export interface StringInterface {
  initialString: string;
}

// defined the initial state
const initialString = {
  initialString: '',
};

// define the reducer creator (private)
const _stringCounter = createReducer(
  initialString,
  on(stringCount, (state, payload) => ({
    ...state,
    payload,
  }))
);

// define a wrapper for the reducer
export const stringCounterReducer = function (
  state: StringInterface | undefined,
  action: Action
) {
  return _stringCounter(state, action);
};
