import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faCube, faWallet, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent {
  faFile = faFile
  faAlignJustify = faAlignJustify
  faqs = [
    {title: 'General', icon: faFile},
    {title: 'Delivery', icon: faCube},
    {title: 'Payments', icon: faWallet}
  ]

}
