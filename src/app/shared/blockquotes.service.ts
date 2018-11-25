import { QUOTES } from './../mock-db/mock-quotes';
import { Injectable } from '@angular/core';
import { BlockQuote } from './blockquote.model';

@Injectable({
  providedIn: 'root'
})
export class BlockquotesService {
  getQuotes(): Promise<Array<BlockQuote>> {
    return Promise.resolve(QUOTES)
  }
}
