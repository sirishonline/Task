import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Offer } from '../models/offer';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class OffersService {
  private BASE_URL: string = environment.apiURL;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('OfferService');
  }

  getOffers(): Observable<{}> {
    return this.http.get(`${this.BASE_URL}` + '/offers/');
  }
}
