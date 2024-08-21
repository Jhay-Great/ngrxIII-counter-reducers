import { createReducer, on } from "@ngrx/store";

import { increment, decrement, reset, setCounter } from "../actions/counter.action";

// defining the shape of the state
type counterType = number;

interface counterInterface {
    counter: number,
}

// setting the initial state
const initialValue:counterType = 0;
// const initialValue:counterInterface = {
//     counter: 0,
// };

export const counterReducer = createReducer(
    initialValue,
    on(increment, (state:number):counterType => state + 1),
    on(decrement, (state:number):counterType => state > 0 ? state - 1 : 0),
    on(reset, (state:number):counterType => 0),
    on(setCounter, (state, {counter}) => counter)
    // on(increment, (state) => ({...state, state: state.counter + 1})),
    // on(decrement, (state) => ({...state, state: state.counter > 0 ? state.counter - 1 : 0})),
    // on(reset, (state) => ({...state, state: 0})),
    // on(setCounter, (state:number, {counter:number}) => ({setCounter})),
)