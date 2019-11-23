import {Action, createAction} from '@ngrx/store';

export enum CounterActionTypes {
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
    RESET = '[Counter] Reset',
    CHANGE = '[Counter] Change'
}

export class Increment implements Action {
    readonly type = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
    readonly type = CounterActionTypes.DECREMENT;
}

export class Change implements Action {
    readonly type = CounterActionTypes.CHANGE;
}

export class Reset implements Action {
    readonly type = CounterActionTypes.RESET;
}

export type CounterActions = Increment | Decrement | Reset | Change;

export const change = createAction(CounterActionTypes.CHANGE);
export const increment = createAction(CounterActionTypes.INCREMENT);
export const decrement = createAction(CounterActionTypes.DECREMENT);
export const reset = createAction(CounterActionTypes.RESET);

// export const incrementAction: Action = { type: '[Counter] Increment' };
// export const decrementAction: Action = { type: '[Counter] Decrement' };
// export const resetAction: Action = { type: '[Counter] Reset' };
// export const changeAction: Action = { type: '[Counter] Change' };
