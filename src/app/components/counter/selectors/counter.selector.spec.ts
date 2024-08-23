import { selectCounter, selectFeature } from "./counter.selector";
import { AppState } from "../../reducer";

describe('Counter selector', () => {
    const mockState = {
        numberCounter: 55,
    }

    it('should select the number', () => {
        const stateValue = selectCounter.projector(mockState.numberCounter);
        expect(stateValue).toBe(55);
    })

    


    
})