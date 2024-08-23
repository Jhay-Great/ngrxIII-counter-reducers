import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../reducer";


export const selectFeature = (state:AppState) => state.numberCounter;

export const selectCounter = createSelector(
    selectFeature,
    (state:number) => state,
)






