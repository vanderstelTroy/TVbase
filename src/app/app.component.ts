import { Component }     from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState }      from "./+state/favorites/favorites.selector";

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
    title = 'TVbase';

    constructor(private store: Store<AppState>) {
        this.store.pipe(select((state: AppState) => state.favorites)).subscribe((favorites) => {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        });
    }
}
