import { createAction, props } from "@ngrx/store";

// payload interface
export interface PayloadInterface {
    string: string;
}

// defining action types
export const STRING_COUNTER = '[String counter] counting character in a string';

// defining action creator
export const stringCount = createAction(
    STRING_COUNTER,
    props<PayloadInterface>(),
)

export type stringAction = ReturnType<typeof stringCount>;