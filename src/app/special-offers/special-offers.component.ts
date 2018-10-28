import { Component } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.sass']
})
export class SpecialOffersComponent {
  offerImage = 'assets/images/post02-1.jpg'
  faCheck = faCheck
  offers = [
    {
      image: 'assets/images/special-dish-1.jpg',
      title: 'Chip Friday',
      subTitle: '10% Off for all dishes!',
      checklist: [
        {
          icon: faCheck,
          text: 'Only on Friday',
          color: 'green'
        },
        {
          icon: faCheck,
          text: 'All products',
          color: 'green'
        },
        {
          icon: faCheck,
          text: 'Online order',
          color: 'green'
        }
      ]
    },
    {
      image: 'assets/images/special-burger-1.jpg',
      title: 'Free Burger',
      subTitle: 'Get free burger from orders higher that $40!',
      checklist: [
        {
          icon: faCheck,
          text: 'Only on Tuesdays',
          color: 'green'
        },
        {
          icon: faTimes,
          text: 'Order higher than $40 ',
          color: 'red'
        },
        {
          icon: faCheck,
          text: 'Unless one burger ordered ',
          color: 'green'
        }
      ]
    },
    {
      image: 'assets/images/special-pizza-1.jpg',
      title: 'Free Small Pizza',
      subTitle: 'Get free burger from orders higher that $40!',
      checklist: [
        {
          icon: faCheck,
          text: 'Only on Weekends',
          color: 'green'
        },
        {
          icon: faTimes,
          text: 'Order higher that $40',
          color: 'red'
        }
      ]
    }
  ]
}
