import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {forkJoin} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { OffersService } from '../services/offers.service';

interface Filter {
  locations?: any; // the "?" makes the property optional,
  makes?: any; //  so you can start with an empty object
}

@Injectable()
export class OffersResolver implements Resolve<Observable<string>> {
  constructor(
    private OffersService: OffersService,
  ) { }

  resolve(): Observable<any> {
    return this.OffersService.getOffers();
  }
}
