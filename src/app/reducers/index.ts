import {
  Action,
  ActionReducer,
  ActionReducerMap, createAction,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
  firstVar: number;
  secondVar: number;
}

export const initialState: State = {
  firstVar: -5,
  secondVar: 10,
};

type Reducer<T> = (state: T, action: Action) => T;

export const incrementAction: Action = { type: '[Counter] Increment' };
export const decrementAction: Action = { type: 'Decrement' };
export const resetAction: Action = { type: 'Reset' };
export const changeAction: Action = { type: 'Change' };

//  let reducer: Reducer<State> = (state: State, action: Action) => {
//   return state;
// };

export const reducers: ActionReducerMap<State> = {
      firstVar: undefined,
      secondVar: undefined,
};

export const reducer: Reducer<State> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case '[Counter] Change':
      return state;
    case '[Counter] Increment':
      state.firstVar++;
      return state;
    case '[Counter] Decrement':
      state.secondVar--;
      return state;
    case '[Counter] Reset':
      state.firstVar = -5;
      state.secondVar = 10;
      return state;
    default:
      return state;
  }
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
