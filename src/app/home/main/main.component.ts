import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  public carouselItems = [
    {imagePath: 'assets/images/slider-burger-1.jpg', alt: 'Burger'},
    {imagePath: 'assets/images/slider-pasta-1.jpg', alt: 'Pasta'},
    {imagePath: 'assets/images/slider-dessert-1.jpg', alt: 'Dessert'}
  ]

}
