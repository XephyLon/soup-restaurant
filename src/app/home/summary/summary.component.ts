import { BlockQuote } from './../../shared/blockquote.model';
import { BlockquotesService } from './../../shared/blockquotes.service';
import { Component, OnInit } from '@angular/core';
import { faBox, faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {
  bgPath = 'assets/images/bg-food-1.jpg'
  quotes: Array<BlockQuote> = []

  optionsList = [
    {title: 'Pick a dish', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faShoppingCart},
    {title: 'Make a payment', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faWallet},
    {title: 'Recieve your food!', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faBox}
  ]

  constructor(private blockquoteService: BlockquotesService) {}

  ngOnInit(): void {
    this.blockquoteService
      .getQuotes()
      .then(quotes => this.quotes = quotes)
  }
}
