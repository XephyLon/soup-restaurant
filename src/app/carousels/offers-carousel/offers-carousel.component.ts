import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.sass']
})
export class OffersCarouselComponent implements OnInit {

  @Input() name: string
  offers = [
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

  public carouselTileItems$: Observable<number[]>
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    point: { visible: true },
    touch: true,
    loop: true,
    interval: { timing: 2000 },
    animation: 'lazy'
  }

  tempData: any[]

  ngOnInit() {
    this.tempData = []
    this.carouselTileItems$ = interval(2000).pipe(
      startWith(this.offers.length - 1),
      take(3),
      map( (val) => {
        const data = (this.tempData = [
          ...this.tempData,
          this.offers[val]
        ])
        return data
      } )
    )
  }

}
