import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { OffersService } from './services/offers.service';
import { OffersResolver } from './resolvers/offers.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    HttpClientModule,
    routing,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpErrorHandler,
    OffersService,
    OffersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
