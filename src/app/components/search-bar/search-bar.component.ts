import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject }                          from "rxjs";

@Component({
    selector   : 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : [ './search-bar.component.scss' ]
})
export class SearchBarComponent implements OnInit {

    @Output() searchEmit: EventEmitter<string> = new EventEmitter<string>();

    @Input() title!: string;
    @Input() debounceTime = 400;

    searchSubject$ = new Subject();

    query = '';

    ngOnInit() {
        this.searchSubject$.pipe(
            debounceTime(this.debounceTime)
        ).subscribe(() => {
            this.searchEmit.emit(this.query);
        });
    }

    search() {
        this.searchSubject$.next('');
    }
}
