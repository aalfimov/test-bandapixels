import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private increaseVariable = -5;
    private decreaseVariable = 10;

    constructor() {
    }

    increase() {
        this.increaseVariable++;
    }

    decrease() {
        this.decreaseVariable--;
    }
    change() {
    }
}
