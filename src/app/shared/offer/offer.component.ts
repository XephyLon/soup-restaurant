import { Checklist, SpecialOffer } from "./../special-offer.model";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.sass"]
})
export class OfferComponent implements OnInit, SpecialOffer {
  faCheck = faCheck;
  faTimes = faTimes;

  @Input() public image: string;
  @Input() public title: string;
  @Input() public subTitle: string;
  @Input() public checklist: Array<Checklist>;
  @Input() public dataSource: SpecialOffer = {
    image: this.image,
    title: this.title,
    subTitle: this.subTitle,
    checklist: this.checklist
  };

  constructor() {}

  ngOnInit(): void {}
}
