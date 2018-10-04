import { tns } from 'tiny-slider/src/tiny-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor() {
    tns();
  }

  title = 'soup-restaurant';
}
