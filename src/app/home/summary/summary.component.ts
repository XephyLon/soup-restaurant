import { Component } from '@angular/core';
import { faStar, faShoppingCart, faWallet, faBox } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent {
  bgPath = 'assets/images/bg-food-1.jpg'
  faStar = faStar

  optionsList = [
    {title: 'Pick a dish', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faShoppingCart},
    {title: 'Make a payment', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faWallet},
    {title: 'Recieve your food!', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: faBox}
  ]
}
