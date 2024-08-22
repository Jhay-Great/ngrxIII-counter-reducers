
import { counterReducer } from "./counter.reducer";
import { increment, decrement, reset } from "../actions/counter.action";

describe('Counter Reducer', () => {

    it('should increment the state by 1', () => {
        let state = 0

        state = counterReducer(state, increment);
        expect(state).toBe(1);

        state = counterReducer(state, increment);
        expect(state).toBe(2);

        state = counterReducer(state, increment);
        expect(state).toBe(3);
        
    });
    it('should decrease the state by 1', () => {
        let state = 5

        state = counterReducer(state, decrement);
        expect(state).toBe(4);

        state = counterReducer(state, decrement);
        expect(state).toBe(3);

        state = counterReducer(state, decrement);
        expect(state).toBe(2);
        
    });
    it('should reset the state to 0', () => {

        expect(counterReducer(0, reset)).toBe(0);

        expect(counterReducer(3, reset)).toBe(0);

    });


    
})