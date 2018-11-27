import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-promo-video',
  templateUrl: './promo-video.component.html',
  styleUrls: ['./promo-video.component.sass']
})
export class PromoVideoComponent implements OnInit {

  faPlay = faPlay

  constructor() { }

  ngOnInit(): void {
  }

}
