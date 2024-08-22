import { selectCounter, selectFeature, AppState } from "./counter.selector";

describe('Counter selector', () => {
    let initialState: AppState = {
        counter: 6,
    }

    it('should select the counter', () => {
        const counter = selectCounter(initialState);
        expect(counter).toBe(6);
    })
    
})