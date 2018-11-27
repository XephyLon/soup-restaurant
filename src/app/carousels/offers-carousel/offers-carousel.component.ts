import { SpecialOffersService } from './../../shared/special-offers.service';
import { SpecialOffer } from './../../shared/special-offer.model';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.sass']
})
export class OffersCarouselComponent implements OnInit {

  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight
  faCheck = faCheck
  faTimes = faTimes
  offers: Array<SpecialOffer> = []

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    point: { visible: true },
    touch: true,
    loop: true,
    interval: { timing: 2000 },
    animation: 'lazy'
  }

  constructor(private specialOffersService: SpecialOffersService) {}

  tempData: Array<any>

  ngOnInit(): void {
    this.specialOffersService
      .getOffers()
      .then(offers => this.offers = offers)
  }

}
