import { Component, AfterContentInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  socialMedia = [
    {class: 'icon__social__facebook', url: 'http://fb.com', icon: faFacebook},
    {class: 'icon__social__google', url: 'http://gp.com', icon: faGoogle},
    {class: 'icon__social__twitter', url: 'http://tw.com', icon: faTwitter},
    {class: 'icon__social__youtube', url: 'http://yt.com', icon: faYoutube},
    {class: 'icon__social__instagram', url: 'http://ins.com', icon: faInstagram}
  ]
}
