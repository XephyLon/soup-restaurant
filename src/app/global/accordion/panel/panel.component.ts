import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'ng-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({height: 0, opacity: 0 }),
        animate('200ms ease-in', style({height: 'auto', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({height: 0, opacity: 0 }))
      ])
    ]),
    trigger('extend', [
      state('open', style({
        height: '35vh'
      })),
      state('close', style({
        height: '25vh'
      })),
      transition('open <=> close', [
        animate('.2s')
      ])
    ])
  ]

})
export class PanelComponent {
  @Input() opened: boolean = false
  @Input() title: string
  @Input() bgImage: string
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>()
}
