import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-navigation',
  templateUrl: './grid-navigation.component.html',
  styleUrls: ['./grid-navigation.component.sass']
})
export class GridNavigationComponent {

  menus = [
    { name: 'Burgers', image: '../../../assets/images/menu-title-burgers-1.jpg' },
    { name: 'Pasta', image: '../../../assets/images/menu-title-pasta-1.jpg' },
    { name: 'Pizza', image: '../../../assets/images/menu-title-pizza-1.jpg' },
    { name: 'Sushi', image: '../../../assets/images/menu-title-sushi-1.jpg' },
    { name: 'Desserts', image: '../../../assets/images/menu-title-desserts-1.jpg' },
    { name: 'Drinks', image: '../../../assets/images/menu-title-drinks-1.jpg' }
  ];

  burgers = [
    {name: 'Nigiri Sushi', ingredients: 'Beef, cheese, fries, onion, potato', price: '5'},
    {name: 'Chicken Wings', ingredients: 'Beef, cheese, fries, onion, potato', price: '5'},
    {name: 'Creste de Galli', ingredients: 'Beef, cheese, fries, onion, potato', price: '5'},
    {name: 'Broccoli', ingredients: 'Beef, cheese, fries, onion, potato', price: '5'}
  ];

}
