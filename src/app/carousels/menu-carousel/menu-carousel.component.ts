import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.sass']
})
export class MenuCarouselComponent implements OnInit {

  @Input() name: string
  images = [
    'assets/images/menu-sample-burgers-1.jpg',
    'assets/images/menu-title-desserts-1.jpg',
    'assets/images/menu-title-drinks-1.jpg',
    'assets/images/menu-sample-pasta-1.jpg',
    'assets/images/menu-sample-pizza-1.jpg',
    'assets/images/menu-sample-sushi-1.jpg'
  ]

  public carouselTileItems$: Observable<number[]>
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    speed: 150,
    point: { visible: true },
    touch: true,
    loop: true,
    interval: { timing: 2000 },
    animation: 'lazy'
  }

  tempData: any[]

  constructor() { }

  ngOnInit() {
    this.tempData = []
    this.carouselTileItems$ = interval(2000).pipe(
      startWith(this.images.length - 1),
      take(6),
      map((val) => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[val]
        ])
        return data
      })
    )
  }

}
