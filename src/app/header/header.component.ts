import { Component, AfterContentInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterContentInit {

  constructor (public breakpointObserver: BreakpointObserver) {}
  wrapper = document.getElementById('myContainer');
  breakpoint: boolean;
  isToggled: boolean;
  isActive: boolean;
  faCartArrowDown = faCartArrowDown;
  logoPath = 'assets/logo.svg';
  arrowPath = 'assets/arrow-down.svg';
  cartPath = 'assets/shopping-cart.svg';
  list = [
    { class: 'menu-item', name: 'home', hasDropdown: false, router: '/'},
    { class: 'menu-item', name: 'about', hasDropdown: true, dropdownList: [
      { title: 'about us', router: '/about-us' },
      { title: 'services', router: '/services' },
      { title: 'gallery', router: '/gallery' },
      { title: 'reviews', router: '/reviews' },
      { title: 'faq', router: '/faq' }
    ]},

    { class: 'menu-item', name: 'menu', hasDropdown: false, router: '/menu'},
    { class: 'menu-item', name: 'offers', hasDropdown: false, router: '/offers'},
    { class: 'menu-item', name: 'contact', hasDropdown: false, router: '/contact'},
    { class: 'menu-item', name: 'more', hasDropdown: false, router: '/book'}
  ];

  ngAfterContentInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if ( state.matches ) {
          this.breakpoint = true;
        } else {
          this.breakpoint = false;
        }
      });
  }

}
