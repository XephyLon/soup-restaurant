import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {
  @Input() name: string;
  images = [
    {title: 'Boscaiola Pasta', subTitle: 'New Product!', image: 'assets/images/slider-pasta-1.jpg'},
    {title: 'Get 10% off coupon!', subTitle: 'And use it with your next order!', image: 'assets/images/slider-burger-1.jpg'},
    {title: 'Delicious Desserts', subTitle: 'Order it online even now!', image: 'assets/images/slider-dessert-1.jpg'}
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 800,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 2000 },
    animation: 'lazy'
  };
  tempData: any[];

  constructor() {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(2000).pipe(
      startWith(this.images.length - 1),
      take(3),
      map((val) => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[val]
        ]);
        return data;
      })
    );
  }
}
