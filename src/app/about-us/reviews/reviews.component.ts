import { BlockQuote } from './../../shared/blockquote.model';
import { BlockquotesService } from './../../shared/blockquotes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {
  quotes: Array<BlockQuote> = []

  constructor(private blockquotesService: BlockquotesService) {}

  ngOnInit(): void {
    this.blockquotesService.getQuotes()
      .then(quotes => {
        this.quotes = quotes;
        console.log(this.quotes);
      })

  }

}
