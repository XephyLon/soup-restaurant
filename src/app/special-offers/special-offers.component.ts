import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.sass']
})
export class SpecialOffersComponent {
  offerImage = 'assets/images/post02-1.jpg'
  faCheck = faCheck

}
