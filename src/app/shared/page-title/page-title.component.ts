import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.sass']
})
export class PageTitleComponent implements OnInit {
  @Input() public theme: string
  @Input() public title: string
  @Input() public image: string
  @Input() public ptParallax: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
