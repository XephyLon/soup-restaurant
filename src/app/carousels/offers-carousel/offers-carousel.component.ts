import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight
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
          color:'red'
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
