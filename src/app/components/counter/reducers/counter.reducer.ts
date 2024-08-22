import { createReducer, on } from "@ngrx/store";

import { increment, decrement, reset, setCounter } from "../actions/counter.action";

// defining the shape of the state
export type counterType = number ;

interface counterInterface {
    counter: number,
}

// setting the initial state
// const initialValue:counterType = 0;
const initial:counterType = Number(localStorage.getItem('counter')) ?? 0;

export const counterReducer = createReducer(
    // initialValue,
    initial,
    on(increment, (state:number):counterType => state + 1),
    on(decrement, (state:number):counterType => state > 0 ? state - 1 : 0),
    on(reset, (state:number):counterType => 0),
    on(setCounter, (state, {counter}) => counter),
)