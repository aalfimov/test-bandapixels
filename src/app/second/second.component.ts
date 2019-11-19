import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';


@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    private timerWork = false;

    constructor(private store: StoreService) {
    }

    ngOnInit() {
    }

    start() {
        if (this.timerWork === false) {
            this.timerWork = true;
            this.infinityTimer();
        }
    }

    stop() {
        this.timerWork = false;
    }

    infinityTimer() {
        if (this.timerWork) {
            setTimeout(() => {
                this.store.change();
                this.infinityTimer();
            }, 1000);
        }
    }
}
