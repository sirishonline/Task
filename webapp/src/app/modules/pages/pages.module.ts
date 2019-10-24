import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule, MatSortModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';


import { OffersComponent } from './components/offers/offers.component';

import { OffersResolver } from '../../resolvers/offers.resolver';

const routes: Routes = [
  { path: '', component: OffersComponent, data: { title: 'Offers' }, resolve: { offers: OffersResolver } },
];

@NgModule({
    declarations: [
        OffersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatSortModule,
        MatCardModule
    ],
    providers: [],
    entryComponents: []
})
export class PagesModule {
    public static routes = routes;
}
