import { createSelector } from "@ngrx/store";

type selectorType = number;

export interface AppState {
    counter: number;
}

export const selectFeature = (state:AppState) => state.counter;

export const selectCounter = createSelector(
    selectFeature,
    (state:number) => state,
)





