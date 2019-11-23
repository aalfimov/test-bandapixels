import {CounterState} from './counter.state';
import {CounterActions, CounterActionTypes} from './counter.actions';

export const initialCounterState: CounterState = {
    firstVar: -5,
    secondVar: 10,
};

export function counterReducer(state = initialCounterState, action: CounterActions): CounterState {
    switch (action.type) {
        case CounterActionTypes.CHANGE: {
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
            return initialCounterState;
        }
        default: {
            return state;
        }
    }
}




// import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';
//
// export const initialState = 0;
//
// const createCounterReducer = createReducer(initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1),
//     on(reset, state => 0),
// );
//
// export function counterReducer(state, action) {
//     return createCounterReducer(state, action);
// }
// import { CounterActionTypes, CounterActions } from './counter.actions';
// import {Action} from '@ngrx/store';
// import {initialState, State} from './index';
//
// export function reducer(state: State = initialState, action: Action) {
//     switch (action.type) {
//         case '[Counter] Change':
//             return state;
//         case '[Counter] Increment':
//             state.firstVar++;
//             return state;
//         case '[Counter] Decrement':
//             state.secondVar--;
//             return state;
//         case '[Counter] Reset':
//             state.firstVar = -5;
//             state.secondVar = 10;
//             return state;
//         default:
//             return state;
//     }
// }
// import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset, change } from './counter.actions';
// const createCounterReducer = createReducer(initialState,
//     on(increment, state => state.firstVar + 1),
//     on(decrement, state => state.secondVar--),
//     on(reset, state => state.firstVar = -5),
//     on(change, state => state),
// );
//
// export function counterReducer(state: State = initialState, action) {
//     return createCounterReducer(state, action);
// }
// import {Action} from '@ngrx/store';
// import {initialState, State} from './index';
//
// export const reducer2: Reducer<State> = (state: State = initialState, action: Action) => {
//     switch (action.type) {
//         case '[Counter] Change':
//             return state;
//         case '[Counter] Increment':
//             state.firstVar++;
//             return state;
//         case '[Counter] Decrement':
//             state.secondVar--;
//             return state;
//         case '[Counter] Reset':
//             state.firstVar = -5;
//             state.secondVar = 10;
//             return state;
//         default:
//             return state;
//     }
// };
