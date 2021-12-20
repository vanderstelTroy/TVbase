import { createSelector } from '@ngrx/store';
import { ShowResult }     from "../../models/ShowResult";

export interface AppState {
    favorites: ShowResult[];
}

export const selectAllFavorites = (state: AppState) => state.favorites;

export const selectFavorites = createSelector(
    selectAllFavorites,
    (favorites => {
        return favorites
    })
)

export const selectFavoritesCount = createSelector(
    selectAllFavorites,
    (favorites => {
        return favorites.length
    })
)

export const selectFavoritesByName = (name: string) => createSelector(
    selectAllFavorites,
    (favorites => {
        return favorites.filter(favorite => favorite.show.name.toLowerCase().includes(name))
    })
)