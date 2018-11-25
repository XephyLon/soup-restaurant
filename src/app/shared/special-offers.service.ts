import { OFFERS } from './../mock-db/mock-offers';
import { Injectable } from '@angular/core';
import { SpecialOffer } from './special-offer.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {
  getOffers(): Promise<Array<SpecialOffer>> {
    return Promise.resolve(OFFERS)
  }
}
