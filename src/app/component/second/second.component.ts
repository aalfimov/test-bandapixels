import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../store/old-service/store.service';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {CounterState} from '../../store/counter-state/counter.state';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    private timerWork = false;
    private readonly firstVar: Observable <number>;
    private readonly secondVar: Observable <number>;

    constructor(private store: StoreService, private storage: Store<AppState>) {

        this.firstVar = storage.select(state => state.counter.firstVar);
        this.secondVar = storage.select(state => state.counter.secondVar);
        console.log(this.storage);
        console.log(this.firstVar);
        // private store: Store<fromRoot.State>
        // console.log(reducer(store1, new Decrement()));
        // console.log(reducer(st, new  Increment()));
        // console.log(reducer({firstVar: 0, secondVar: 0}, new Decrement()));
        // console.log(reducer({firstVar: 0, secondVar: 0}, new Change()));
        // console.log(reducer({firstVar: 0, secondVar: 0}, new Reset()));
    }

    ngOnInit() {
    }

    start() {
        if (!this.timerWork) {
            this.timerWork = true;
            this.infinityTimer();
        }
    }
    stop() {
        this.timerWork = false;
    }

    infinityTimer() {
        setTimeout(() => {
            if (this.timerWork) {
                this.store.change();
                this.infinityTimer();
            }
        }, 1000);
    }
}
