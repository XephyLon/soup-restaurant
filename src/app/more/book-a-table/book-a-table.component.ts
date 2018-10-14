import { Component } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-book-a-table',
  templateUrl: './book-a-table.component.html',
  styleUrls: ['./book-a-table.component.sass']
})
export class BookATableComponent {
  faBookmark = faBookmark
}
