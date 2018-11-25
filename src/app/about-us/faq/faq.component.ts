import { Component, TemplateRef, ViewChild } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faAlignJustify, faCube, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent {
  @ViewChild('sideBar', { read: TemplateRef }) elem: TemplateRef<any>;
  isToggled: boolean;
  faFile = faFile;
  faAlignJustify = faAlignJustify;
  faqs = [
    {title: 'General', icon: faFile},
    {title: 'Delivery', icon: faCube},
    {title: 'Payments', icon: faWallet}
  ];

}
