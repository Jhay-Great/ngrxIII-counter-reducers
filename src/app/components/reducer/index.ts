

import { ActionReducerMap } from "@ngrx/store";
import { numberCounterReducers } from "../counter/reducers/counter.reducer";
import { stringCounterReducer } from "../counter/reducers/string.counter.reducer";
import { counterType } from "../counter/reducers/counter.reducer";
import { StringInterface } from "../counter/reducers/string.counter.reducer";

// define the state of the app store
export interface AppState {
    numberCounter: counterType,
    stringCount: StringInterface
}

export interface CountAppState {
    numberCounter: counterType,
}

export interface StringAppState {
    stringCount: StringInterface
}


// define the combinedReducer object
export const combinedReducer: ActionReducerMap<AppState> = {
    numberCounter: numberCounterReducers,
    stringCount: stringCounterReducer,
}

