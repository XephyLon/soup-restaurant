import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent {
  private description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  isEven(index) {
    if (index % 2 === 0 || index === 0) {
      return false
    } else {
      return true
    }
  }

  serviceList = [
    { title: 'Birthdays', text: this.description, image: { 'background-image': "url('../../../assets/images/service-birthday.jpg')" } },
    { title: 'Engagements', text: this.description, image: { 'background-image': "url('../../../assets/images/service-engagement.jpg')" } },
    { title: 'Weddings', text: this.description, image: { 'background-image': "url('../../../assets/images/service-weddings.jpg')" } }
  ]
}
