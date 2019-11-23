import {CounterState} from './counter.state';
import {CounterActions, CounterActionTypes, Decrement, Increment} from './counter.actions';


const firstVariableStartValue = -5;
const secondVariableStartValue = 10;

export const initialCounterState: CounterState = {
    firstVar: firstVariableStartValue,
    secondVar: secondVariableStartValue,
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
            state.firstVar = firstVariableStartValue;
            state.secondVar = secondVariableStartValue;
            return state;
        }
        default: {
            return state;
        }
    }
}
