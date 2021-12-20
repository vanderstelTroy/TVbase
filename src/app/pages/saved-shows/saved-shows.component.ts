import { Component }                                        from '@angular/core';
import { ShowResult }                                       from "../../models/ShowResult";
import { AppState, selectFavorites, selectFavoritesByName } from "../../+state/favorites/favorites.selector";
import { Store }                                            from "@ngrx/store";
import { Subject, take, takeUntil }                         from "rxjs";

@Component({
    selector   : 'app-saved-shows',
    templateUrl: './saved-shows.component.html',
    styleUrls  : [ './saved-shows.component.scss' ]
})
export class SavedShowsComponent {

    results: ShowResult[] = [];

    private destroyed$: Subject<boolean> = new Subject();

    constructor(private store: Store<AppState>) {
        this.store.select(selectFavorites).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(results => {
            this.results = results;
        });
    }

    search(query: string) {
        this.store.select(selectFavoritesByName(query)).pipe(
            take(1)
        ).subscribe(results => {
            this.results = results;
        });
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
