import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription, timer} from 'rxjs';

import {AppState} from '../../store/app.state';
import {Change, Reset} from '../../store/counter-state/counter.actions';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
    private timerWork = false;
    private timer: Subscription;
    private firstVar: Observable<number>;
    private secondVar: Observable<number>;

    constructor(private storage: Store<AppState>) {
        this.firstVar = storage.select(state => state.counter.firstVar);
        this.secondVar = storage.select(state => state.counter.secondVar);
    }

    ngOnInit() {
    }


// todo: bug with fast click start/stop button
    start() {
        if (!this.timerWork) {
            this.timerWork = true;
            this.infinityTimer();
        }
    }

    infinityTimer() {
        this.timer = timer(1000).subscribe(() => {
                this.storage.dispatch(new Change());
                this.infinityTimer();
            });
    }

stop() {
        this.timerWork = false;
        this.timer.unsubscribe();
    }

reset() {
        this.stop();
        this.storage.dispatch(new Reset());
    }
}
