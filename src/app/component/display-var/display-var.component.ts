import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-display-var',
    templateUrl: './display-var.component.html',
    styleUrls: ['./display-var.component.scss']
})
export class DisplayVarComponent {
    @Input() content$: Observable <number>;

    constructor() {
    }
}
