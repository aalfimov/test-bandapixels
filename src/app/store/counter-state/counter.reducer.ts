import {CounterState} from './counter.state';
import {CounterActions, CounterActionTypes, Decrement, Increment} from './counter.actions';

// todo: reset don't work
// todo: bug with fast click start/stop button
export const initialCounterState: CounterState = {
    firstVar: -5,
    secondVar: 10,
};

export function counterReducer(state = initialCounterState, action: CounterActions): CounterState {
    switch (action.type) {
        case CounterActionTypes.CHANGE: {
            counterReducer(state, new Increment());
            counterReducer(state, new Decrement());
            counterReducer(state, new Decrement());
            return state;
        }
        case CounterActionTypes.INCREMENT: {
            state.firstVar++;
            return state;
        }
        case CounterActionTypes.DECREMENT: {
            state.secondVar--;
            return state;
        }
        case CounterActionTypes.RESET: {
            // state.firstVar = initialCounterState.firstVar;
            // state.secondVar = initialCounterState.secondVar;
            return state = initialCounterState;
        }
        default: {
            return state;
        }
    }
}
