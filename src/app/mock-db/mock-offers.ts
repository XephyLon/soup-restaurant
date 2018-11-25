import { SpecialOffer } from "../shared/special-offer.model";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const OFFERS: Array<SpecialOffer> = [
  {
    image: 'assets/images/special-dish-1.jpg',
    title: 'Chip Friday',
    subTitle: '10% Off for all dishes!',
    checklist: [
      {
        icon: faCheck,
        text: 'Only on Friday'
      },
      {
        icon: faCheck,
        text: 'All products'
      },
      {
        icon: faCheck,
        text: 'Online order'
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
        text: 'Only on Tuesdays'
      },
      {
        icon: faTimes,
        text: 'Order higher than $40 '
      },
      {
        icon: faCheck,
        text: 'Unless one burger ordered '
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
        text: 'Only on Weekends'
      },
      {
        icon: faTimes,
        text: 'Order higher that $40'
      }
    ]
  }
]
