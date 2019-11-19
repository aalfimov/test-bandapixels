import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    increaseVariable = -5;
    decreaseVariable = 10;

    constructor() {
    }

    increase() {
        this.increaseVariable++;
    }

    decrease() {
        this.decreaseVariable--;
    }
    change() {
        this.increase();
        this.decrease();
        this.decrease();
    }
}
