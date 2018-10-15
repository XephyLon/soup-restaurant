import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-navigation',
  templateUrl: './grid-navigation.component.html',
  styleUrls: ['./grid-navigation.component.sass']
})
export class GridNavigationComponent {

  menus = [
    { name: 'Burgers', image: "url('../../../assets/images/menu-title-burgers-1.jpg')" },
    { name: 'Pasta', image: "url('../../../assets/images/menu-title-pasta-1.jpg')" },
    { name: 'Pizza', image: "url('../../../assets/images/menu-title-pizza-1.jpg')" },
    { name: 'Sushi', image: "url('../../../assets/images/menu-title-sushi-1.jpg')" },
    { name: 'Desserts', image: "url('../../../assets/images/menu-title-desserts-1.jpg')" },
    { name: 'Drinks', image: "url('../../../assets/images/menu-title-drinks-1.jpg')" }
  ]

  burgers = [
    {name: 'Nigiri Sushi', ingredients: 'Beef, cheese, fries, onion, potato'},
    {name: 'Chicken Wings', ingredients: 'Beef, cheese, fries, onion, potato'},
    {name: 'Creste de Galli', ingredients: 'Beef, cheese, fries, onion, potato'},
    {name: 'Broccoli', ingredients: 'Beef, cheese, fries, onion, potato'}
  ]

  toggleCollapse() {
    let _content = document.querySelector('.collapse-toggle').nextElementSibling;
    if (_content.style.maxHeight) {
      return _content.style.maxHeight = null;
    } else {
      return _content.style.cssText = 'max-height: auto'
    }
  }
}
