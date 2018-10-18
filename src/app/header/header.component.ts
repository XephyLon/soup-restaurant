import { Component, AfterContentInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterContentInit {

  constructor (public breakpointObserver: BreakpointObserver) {}
  wrapper = document.getElementById('myContainer')
  breakpoint: boolean
  isToggled: boolean
  faCartArrowDown = faCartArrowDown
  logoPath = 'assets/logo.svg';
  arrowPath = 'assets/arrow-down.svg';
  cartPath = 'assets/shopping-cart.svg';
  list = [
    {
      class: 'menu-item has-dropdown', name: 'home', hasDropdown: true, dropdownList: [
        'home basic',
        'home fullwidth slider',
        'home home video'
      ]},
    { class: 'menu-item has-dropdown', name: 'about', hasDropdown: true, dropdownList: [
      'about us',
      'services',
      'gallery',
      'reviews',
      'faq'
    ]},
    { class: 'menu-item has-dropdown', name: 'menu', hasDropdown: true, dropdownList: [
      'list',
      'grid'
    ]},
    { class: 'menu-item', name: 'offers', hasDropdown: false},
    { class: 'menu-item', name: 'contact', hasDropdown: false},
    { class: 'menu-item has-dropdown', name: 'more', hasDropdown: true, dropdownList: [
      'book a table',
      'blog',
      'blog + sidebar',
      'blog post'
    ]}
  ];

  ngAfterContentInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if( state.matches ) {
          this.breakpoint = true
        } else {
          this.breakpoint = false
        }
      })
  }
}
