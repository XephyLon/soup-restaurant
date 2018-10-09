import { Component } from '@angular/core';
import { faFacebook, faGoogle, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  faArrowRight = faArrowRight

  newsList = [
    {title: 'How to make perfect pasta?', date: 'May 21, 2017'},
    {title: 'How to make perfect pasta?', date: 'May 21, 2017'},
    {title: 'Delicious idea for your Sunday dessert', date: 'May 21, 2017'}
  ]

  socialMedia = [
    {class: 'footer__icon__social__facebook', url: 'http://fb.com', icon: faFacebook},
    {class: 'footer__icon__social__google', url: 'http://gp.com', icon: faGoogle},
    {class: 'footer__icon__social__twitter', url: 'http://tw.com', icon: faTwitter},
    {class: 'footer__icon__social__youtube', url: 'http://yt.com', icon: faYoutube},
    {class: 'footer__icon__social__instagram', url: 'http://ins.com', icon: faInstagram}
  ]
}
