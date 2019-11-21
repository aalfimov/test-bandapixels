import { Action } from '@ngrx/store';

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

export type CounterActionsUnion = Increment | Decrement | Reset | Change;

// export const change = createAction('[Counter] Change');
// export const increment = createAction('[Counter] Increment');
// export const decrement = createAction('[Counter] Decrement');
// export const reset = createAction('[Counter] Reset');
