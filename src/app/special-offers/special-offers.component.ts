import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from "@angular/core";
import { SpecialOffersService } from "../shared/special-offers.service";

@Component({
  selector: "app-special-offers",
  templateUrl: "./special-offers.component.html",
  styleUrls: ["./special-offers.component.sass"]
})
export class SpecialOffersComponent implements OnInit {
  faCheck = faCheck
  faTimes = faTimes
  offers = [];

  constructor(private specialOfferService: SpecialOffersService) {}

  ngOnInit(): void {
    this.specialOfferService
      .getOffers()
      .then(offers => (this.offers = offers));
  }
}
