import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  ngAfterContentInit(): void {
    this.panels.toArray()
      .forEach((panel: PanelComponent) => {
        panel.toggle.subscribe(() => { this.openPanel(panel); });
      });
  }

  openPanel(panel: PanelComponent): void {
    this.panels.toArray()
      .forEach(p => {
        p.opened = false;
      });
    panel.opened = true;
  }

  constructor() { }
}
