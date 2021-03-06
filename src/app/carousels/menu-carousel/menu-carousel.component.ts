import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, take, map } from 'rxjs/operators';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.sass']
})
export class MenuCarouselComponent implements OnInit {
  @Input()
  name: string;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  images = [
    { title: 'Burgers', image: 'assets/images/menu-sample-burgers-1.jpg' },
    { title: 'Desserts', image: 'assets/images/menu-title-desserts-1.jpg' },
    { title: 'Drinks', image: 'assets/images/menu-title-drinks-1.jpg' },
    { title: 'Pasta', image: 'assets/images/menu-sample-pasta-1.jpg' },
    { title: 'Pizza', image: 'assets/images/menu-sample-pizza-1.jpg' },
    { title: 'Sushi', image: 'assets/images/menu-sample-sushi-1.jpg' }
  ];

  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    speed: 550,
    point: { visible: true },
    touch: true,
    loop: true,
    interval: { timing: 5000 },
    animation: 'lazy'
  };

  tempData: any[];

  constructor() {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(2000).pipe(
      startWith(this.images.length - 1),
      take(6),
      map(val => {
        const data = (this.tempData = [...this.tempData, this.images[val]]);
        return data;
      })
    );
  }
}
