
import { _counterReducer } from "./counter.reducer";
import { increment, decrement, reset } from "../actions/counter.action";
import { AppState } from "../../reducer";

describe('Counter Reducer', () => {
    
    it('should increment the state by 1', () => {
        let state = 0;
        let payload = {
            interval: 1,
        }

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(1);

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(2);

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(3);
        
    });

    it('should decrease the state by 1', () => {
        let state = 5;
        let payload = {
            interval: 1,
        }

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(4);

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(3);

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(2);
        
    });
    // it('should reset the state to initial state value', () => {
    //     let initialState = 5;
    //     expect(_counterReducer(0, reset)).toBe(initialState);

    //     expect(_counterReducer(3, reset)).toBe(initialState);

    // });
    
})

import { stringCounterReducer } from "./string.counter.reducer";
import { stringCount, STRING_COUNTER } from "../actions/string.counter.action";
describe('String reducer', () => {
    it ('should update the state with the length of the string and the string itself', () => {

        const initialState = {
        initialString: '',
        stringLength: 0
      };
        
        const payload = {string: 'hello'};
        const action = stringCount(payload);
        const newState = stringCounterReducer(initialState, action);
        
        expect(newState).toEqual({
            initialString: payload.string,
            stringLength: payload.string.length
        })

    })
})
