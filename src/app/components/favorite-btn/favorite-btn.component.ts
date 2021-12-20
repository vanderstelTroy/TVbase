import { Component, Input, OnInit } from '@angular/core';
import { select, Store }            from "@ngrx/store";
import { favoritesToggle }          from "../../+state/favorites/favorites.actions";
import { ShowResult }               from "../../models/ShowResult";
import { AppState }                 from "../../+state/favorites/favorites.selector";
import { ToastService }             from "../../services/toast.service";
import { TranslateService }         from "@ngx-translate/core";

@Component({
    selector   : 'app-favorite-btn',
    templateUrl: './favorite-btn.component.html',
    styleUrls  : [ './favorite-btn.component.scss' ]
})
export class FavoriteBtnComponent implements OnInit {

    @Input() result!: ShowResult;
    @Input() size: 'medium' | 'large' = 'medium';

    favorite = false;

    constructor(private store: Store<AppState>,
                private toastService: ToastService,
                private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.store.pipe(select((state: AppState) => state.favorites)).subscribe((favorites) => {
            this.favorite = favorites.some((favorite: ShowResult) => favorite.show.id === this.result.show.id);
        });
    }

    toggleFavorite(event: MouseEvent) {
        event.preventDefault();
        event.stopImmediatePropagation();

        this.favorite = !this.favorite;

        this.store.dispatch(favoritesToggle({
            payload: this.result
        }));

        this.toastService.show(this.translate.instant('GENERAL.SUCCESSFULLY_' + (this.favorite ? 'ADDED' : 'REMOVED'), { name: this.result.show.name }), {
            classname: (this.favorite ? 'bg-success' : 'bg-danger') + ' text-light',
            delay    : 3000
        });
    }
}
