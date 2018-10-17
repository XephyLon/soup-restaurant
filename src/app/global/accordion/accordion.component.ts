import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'ng-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>

  ngAfterContentInit(): void {
    this.panels.toArray()[0].opened = true
    this.panels.toArray().forEach((panel: PanelComponent) => {
      panel.toggle.subscribe(() => { this.openPanel(panel) })
    })
  }

  openPanel(panel: PanelComponent) {
    this.panels.toArray().forEach(p => {
      p.opened = false
    })
    panel.opened = true
  }

  constructor() { }
}
