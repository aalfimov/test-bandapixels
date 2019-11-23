import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, timer} from 'rxjs';

import {AppState} from '../../store/app.state';
import {Change, Reset} from '../../store/counter-state/counter.actions';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
    private timerWork = false;
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
            // const numbers = timer(1000, 1000);
            // numbers.subscribe(x => console.log(x));
        }
    }

    infinityTimer() {
        timer(1000).subscribe(() => {
            if (this.timerWork) {
                this.storage.dispatch(new Change());
                this.infinityTimer();
            }
        });
    }

    stop() {
        this.timerWork = false;
        clearTimeout();
    }

    reset() {
        this.stop();
        this.storage.dispatch(new Reset());
    }
}
