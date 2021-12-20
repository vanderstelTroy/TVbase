import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailComponent }  from "./show-detail/show-detail.component";
import { SavedShowsComponent }  from "./saved-shows/saved-shows.component";
import { SearchComponent }      from "./search/search.component";

const ROUTES: Routes = [
    {
        path      : '',
        redirectTo: 'search',
    },
    {
        path     : 'search',
        component: SearchComponent
    },
    {
        path     : 'show-detail/:id',
        component: ShowDetailComponent
    },
    {
        path     : 'show-detail',
        component: ShowDetailComponent
    },
    {
        path     : 'saved-shows',
        component: SavedShowsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {
}
