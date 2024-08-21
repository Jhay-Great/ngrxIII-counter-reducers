import { createSelector } from "@ngrx/store";

type selectorType = number;

export interface AppState {
    counter: number;
}

export const selectFeature = (state:selectorType) => state;

export const selectCounter = createSelector(
    selectFeature,
    (state:number) => state,
)



