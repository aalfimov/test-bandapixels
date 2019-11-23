import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-display-var',
    templateUrl: './display-var.component.html',
    styleUrls: ['./display-var.component.scss']
})
export class DisplayVarComponent implements OnInit {
    @Input() content: Observable <number>;

    constructor() {
    }

    ngOnInit() {
        console.log(this.content.subscribe(console));
    }
}
