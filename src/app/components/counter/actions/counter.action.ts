import { createAction, props } from "@ngrx/store";

interface setCounter {
    type: string;
    counter: number;
}

export const increment = createAction(
    '[Counter] increment',
);

export const decrement = createAction('[Counter] decrement');

export const reset = createAction('[Counter] reset');

export const setCounter = createAction(
    '[Counter] set count value',
    props<{counter: number}>(),
);