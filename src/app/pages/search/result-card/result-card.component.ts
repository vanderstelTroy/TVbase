import { Component, Input, OnInit } from '@angular/core';
import { ShowResult }               from "../../../models/ShowResult";

@Component({
    selector   : 'app-result-card',
    templateUrl: './result-card.component.html',
    styleUrls  : [ './result-card.component.scss' ]
})
export class ResultCardComponent implements OnInit {

    @Input() result!: ShowResult;
    favorite = false;

    constructor() {
    }

    ngOnInit(): void {
    }
}
