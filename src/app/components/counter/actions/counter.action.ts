import { createAction, props } from "@ngrx/store";

interface setCounter {
    type: string;
    counter: number;
}

// defining action types
export const INCREASE_COUNT = '[Counter] increment';
export const DECREASE_COUNT = '[Counter] decrement';
export const RESET = '[Counter] reset';
export const SET_INITIAL_COUNT = '[Counter] set count value';

export const increment = createAction( INCREASE_COUNT );

export const decrement = createAction( DECREASE_COUNT );

export const reset = createAction( RESET );

export const setCounter = createAction(
    SET_INITIAL_COUNT,
    // props<{counter: number}>(),
    (counter: number) => ({ counter })
);