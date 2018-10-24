import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about-us/about/about.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { ContactComponent } from './contact/contact.component';
import { BookATableComponent } from './more/book-a-table/book-a-table.component';
import { GridNavigationComponent } from './menu/grid-navigation/grid-navigation.component';
import { ServicesComponent } from './about-us/services/services.component';
import { GalleryComponent } from './about-us/gallery/gallery.component';
import { ReviewsComponent } from './about-us/reviews/reviews.component';
import { FaqComponent } from './about-us/faq/faq.component';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  { path: 'about-us', component: AboutComponent },
  { path: 'offers', component: SpecialOffersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: BookATableComponent },
  { path: 'menu', component: GridNavigationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
