import {ActionReducerMap} from '@ngrx/store';

import {AppState} from './app.state';
import {counterReducer} from './counter-state/counter.reducer';

export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
};
