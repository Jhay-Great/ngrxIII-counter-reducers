import { createReducer, on, Action } from '@ngrx/store';

import {
  increment,
  decrement,
  reset,
  setCounter,
} from '../actions/counter.action';

// defining the shape of the state
export type counterType = number;

let initial: counterType = Number(localStorage.getItem('counter')) ?? 0;

export const _counterReducer = createReducer(
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
    return _counterReducer(state, action as any); 
  }
