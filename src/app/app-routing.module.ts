import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path        : '',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
