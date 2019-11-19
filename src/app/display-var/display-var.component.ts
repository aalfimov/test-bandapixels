import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-display-var',
    templateUrl: './display-var.component.html',
    styleUrls: ['./display-var.component.scss']
})
export class DisplayVarComponent implements OnInit {
    @Input() content: number;

    constructor() {
    }

    ngOnInit() {
    }

}
