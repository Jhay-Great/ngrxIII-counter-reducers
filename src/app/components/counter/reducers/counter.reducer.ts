import { createReducer, on } from "@ngrx/store";

import { increment, decrement, reset, setCounter } from "../actions/counter.action";

// defining the shape of the state
type counterType = number;

interface setCounter {
    setCounter: number,
}

// setting the initial state
const initialValue = 0;

export const counterReducer = createReducer(
    initialValue,
    on(increment, (state:number):counterType => state + 1),
    on(decrement, (state:number):counterType => state > 0 ? state - 1 : 0),
    on(reset, (state:number):counterType => 0),
    // on(setCounter, (state:number, {counter:number}):counterType => ({setCounter})),
)