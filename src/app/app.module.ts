import { NgModule }                                                  from '@angular/core';
import { BrowserModule }                                             from '@angular/platform-browser';
import { AppRoutingModule }                                          from './app-routing.module';
import { AppComponent }                                              from './app.component';
import { SearchComponent }                                           from './pages/search/search.component';
import { ShowDetailComponent }                                       from './pages/show-detail/show-detail.component';
import { SavedShowsComponent }                                       from './pages/saved-shows/saved-shows.component';
import { PagesRoutingModule }                                        from "./pages/pages-routing.module";
import { MenuComponent }                                             from './components/menu/menu.component';
import { NgbModule }                                                 from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }                                               from "@angular/forms";
import { HttpClient, HttpClientModule }                              from "@angular/common/http";
import { ResultCardComponent }                                       from "./pages/search/result-card/result-card.component";
import { FavoriteBtnComponent }                                      from './components/favorite-btn/favorite-btn.component';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from "@ngrx/store";
import { favoritesReducer }                                          from "./+state/favorites/favorites.reducer";
import { StoreDevtoolsModule }                                       from "@ngrx/store-devtools";
import { environment }                                               from "../environments/environment";
import { localStorageSync }                                          from "ngrx-store-localstorage";
import { SearchBarComponent }                                        from './components/search-bar/search-bar.component';
import { TranslateLoader, TranslateModule }                          from "@ngx-translate/core";
import { TranslateHttpLoader }                                       from "@ngx-translate/http-loader";
import { BasicModalComponent }                                       from './components/modals/basic-modal/basic-modal.component';
import { AppState }                 from "./+state/favorites/favorites.selector";
import { ToastsContainerComponent } from "./components/toasts-container/toasts-container.component";

const reducers: ActionReducerMap<AppState> = { favorites: favoritesReducer };

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return localStorageSync({
            keys     : [ 'favorites' ],
            rehydrate: true
        }
    )(reducer);
}

const metaReducers: Array<MetaReducer<AppState>> = [ localStorageSyncReducer ];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ShowDetailComponent,
        SavedShowsComponent,
        MenuComponent,
        ResultCardComponent,
        FavoriteBtnComponent,
        SearchBarComponent,
        BasicModalComponent,
        ToastsContainerComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader         : {
                provide   : TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps      : [ HttpClient ]
            }
        }),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            maxAge : 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        })
    ],
    providers   : [ PagesRoutingModule ],
    bootstrap   : [ AppComponent ]
})
export class AppModule {}
