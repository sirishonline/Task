import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

const appRoutes: Routes = [

    {
        path: '',
        component: AppLayoutComponent,
        loadChildren: './modules/pages/pages.module#PagesModule'
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


