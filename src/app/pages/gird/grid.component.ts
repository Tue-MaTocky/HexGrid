import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    hideGridSpecs: boolean = true;
    constructor () { }
    ngOnInit(): void { }

    showGridSpecs(value: boolean) { this.hideGridSpecs = !value; }

}
