import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.sass']
})
export class BlockquoteComponent implements OnInit {
  @Input() public image: string
  @Input() public author: string
  @Input() public service: string

  ngOnInit(): void {
  }

}
