import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './home/main/main.component';
import { SummaryComponent } from './home/summary/summary.component';
import { PromoVideoComponent } from './home/promo-video/promo-video.component';
import { FooterComponent } from './home/footer/footer.component';
import { OurMenuComponent } from './home/our-menu/our-menu.component';
import { AboutComponent } from './about-us/about/about.component';
import { ServicesComponent } from './about-us/services/services.component';
import { GalleryComponent } from './about-us/gallery/gallery.component';
import { ReviewsComponent } from './about-us/reviews/reviews.component';
import { FaqComponent } from './about-us/faq/faq.component';
import { BookATableComponent } from './more/book-a-table/book-a-table.component';
import { GridNavigationComponent } from './menu/grid-navigation/grid-navigation.component';
import { ListNavigationComponent } from './menu/list-navigation/list-navigation.component';
import { BlogpostComponent } from './more/blog/blogpost/blogpost.component';
import { BlogsPageComponent } from './more/blog/blogs-page/blogs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SummaryComponent,
    PromoVideoComponent,
    FooterComponent,
    OurMenuComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ReviewsComponent,
    FaqComponent,
    BookATableComponent,
    GridNavigationComponent,
    ListNavigationComponent,
    BlogpostComponent,
    BlogsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
