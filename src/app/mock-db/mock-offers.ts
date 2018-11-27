import { SpecialOffer } from "../shared/special-offer.model";

export const OFFERS: Array<SpecialOffer> = [
  {
    image: 'assets/images/special-dish-1.jpg',
    title: 'Chip Friday',
    subTitle: '10% Off for all dishes!',
    checklist: [
      {
        icon: true,
        text: 'Only on Friday'
      },
      {
        icon: true,
        text: 'All products'
      },
      {
        icon: true,
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
        icon: true,
        text: 'Only on Tuesdays'
      },
      {
        icon: false,
        text: 'Order higher than $40 '
      },
      {
        icon: true,
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
        icon: true,
        text: 'Only on Weekends'
      },
      {
        icon: false,
        text: 'Order higher that $40'
      }
    ]
  }
]
