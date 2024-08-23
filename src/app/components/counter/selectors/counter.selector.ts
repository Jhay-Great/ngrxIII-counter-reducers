import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../reducer";

// type selectorType = number;

// interface AppState {
//     counter: number;
// }

export const selectFeature = (state:AppState) => state.numberCounter;

// export const selectFeature = createFeatureSelector<AppState>('app');

export const selectCounter = createSelector(
    selectFeature,
    (state:number) => state,
)

/**
 * TS2769: No overload matches this call.
  Overload 1 of 9, '(mapFn: (state: { counter: number; }) => number): Observable<number>', gave the following error.
    Argument of type 'MemoizedSelector<AppState, number, (s1: number) => number>' is not assignable to parameter of type '(state: { counter: number; }) => number'.
      Types of parameters 'state' and 'state' are incompatible.
        Type '{ counter: number; }' is missing the following properties from type 'AppState': numberCounter, stringCount
  Overload 2 of 9, '(key: "counter"): Observable<number>', gave the following error.
    Argument of type 'MemoizedSelector<AppState, number, (s1: number) => number>' is not assignable to parameter of type '"counter"'.
 */





