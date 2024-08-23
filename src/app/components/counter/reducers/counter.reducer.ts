import { createReducer, on, Action } from '@ngrx/store';
// import { Action } from 'rxjs/internal/scheduler/Action';

import {
  increment,
  decrement,
  reset,
  setCounter,
  counterActions,
} from '../actions/counter.action';

// defining the shape of the state
export type counterType = number;

// interface counterInterface {
//     counter: number,
// }

// setting the initial state
// const initialValue:counterType = 0;
let initial: counterType = Number(localStorage.getItem('counter')) ?? 0;

export const _counterReducer = createReducer(
  // initialValue,
  initial,
  on(increment, (state: number, { interval }): counterType => state + interval),
  on(
    decrement,
    (state: number, { interval }): counterType =>
      state > 0 ? state - interval : 0
  ),
  on(reset, (): counterType => initial),
  on(setCounter, (state, { interval }) => initial = interval)
);


export function numberCounterReducers(
    state: counterType | undefined,
    action: Action
  ): counterType {
    return _counterReducer(state, action as any); // Use 'any' to bypass type issue, but use caution
  }
