import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../store/old-service/store.service';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Change, Reset} from '../../store/counter-state/counter.actions';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    private timerWork = false;
    private firstVar: Observable <number>;
    private secondVar: Observable <number>;

    constructor(private store: StoreService, private storage: Store<AppState>) {
        this.firstVar = storage.select(state => state.counter.firstVar);
        this.secondVar = storage.select(state => state.counter.secondVar);
    }

    ngOnInit() {
    }

    start() {
        if (!this.timerWork) {
            this.timerWork = true;
            this.infinityTimer();
        }
    }

    infinityTimer() {
        setTimeout(() => {
            if (this.timerWork) {
                this.storage.dispatch(new Change());
                this.infinityTimer();
            }
        }, 1000);
    }

    stop() {
        this.timerWork = false;
    }

    reset() {
        this.storage.dispatch(new Reset());
    }
}
