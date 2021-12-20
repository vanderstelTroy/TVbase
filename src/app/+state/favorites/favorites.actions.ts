import { createAction, props } from "@ngrx/store";
import { ShowResult }          from "../../models/ShowResult";

export const favoritesToggle = createAction(
    '[Favorites] Toggle',
    props<{ payload: ShowResult }>()
);