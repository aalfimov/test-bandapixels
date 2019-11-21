import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store/store.service';
import {decrementAction, incrementAction, reducer} from '../reducers';
import {Store} from '@ngrx/store';
import {Change, Decrement, Increment, Reset} from '../reducers/counter.actions';


@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    private timerWork = false;

    constructor(private store: StoreService) {
        // private store: Store<fromRoot.State>
        const inc = new  Increment();
        const dec = new Decrement();
        const ch = new Change();
        const res = new Reset();

        console.log(reducer({firstVar: 0, secondVar: 0}, inc));
        console.log(reducer({firstVar: 0, secondVar: 0}, dec));
        console.log(reducer({firstVar: 0, secondVar: 0}, ch));
        console.log(reducer({firstVar: 0, secondVar: 0}, res));
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
