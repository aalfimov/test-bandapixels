import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {interval, Subscription} from 'rxjs';

import {AppState} from '../../store/app.state';
import {Change, Reset} from '../../store/counter-state/counter.actions';


@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css'],
})
export class SecondComponent {
    private timerWork = false;
    private timerSubscription: Subscription;

    private firstVar$ = this.storage.select(state => state.counter.firstVar);
    private secondVar$ = this.storage.select(state => state.counter.secondVar);

    constructor(private storage: Store<AppState>) {
    }

    start() {
        this.timerWork = true;
        this.timerSubscription = interval(1000)
            .subscribe(() => this.storage.dispatch(new Change()));
    }

    stop() {
        this.timerWork = false;
        this.timerSubscription.unsubscribe();
    }

    reset() {
        this.stop();
        this.storage.dispatch(new Reset());
    }
}
