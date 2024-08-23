import { createReducer, on, Action } from '@ngrx/store';
import { stringCount, stringAction } from '../actions/string.counter.action';

// interface
export interface StringInterface {
  initialString: string;
  stringLength: number;
}

// defined the initial state
const initialString = {
  initialString: '',
  stringLength: 0
};

// define the reducer creator (private)
export const _stringCounter = createReducer(
  initialString,
  on(stringCount, (state, payload) => {
    const {string} = payload;
    const length = string.length;
    return {
        ...state,
        initialString: string,
        stringLength: length,
      }
      
  })
);

// define a wrapper for the reducer
export const stringCounterReducer = function (
  state: StringInterface | undefined,
  action: Action
) {
  return _stringCounter(state, action);
};
