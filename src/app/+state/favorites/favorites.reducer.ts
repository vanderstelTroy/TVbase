import { createReducer, on } from "@ngrx/store";
import * as FavoritesActions from './favorites.actions';
import { ShowResult }        from "../../models/ShowResult";

export const initialState: ShowResult[] = [];

export const favoritesReducer = createReducer(
    initialState,
    on(FavoritesActions.favoritesToggle, (state, { payload }) => {
        const index = state.findIndex(favorite => favorite.show.id === payload.show.id);

        if (index >= 0) {
            const newState = [ ...state ];
            newState.splice(index, 1)

            return newState;
        } else {
            return [ ...state, payload ]
        }
    })
);