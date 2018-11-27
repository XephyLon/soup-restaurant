import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParallaxConfig, ParallaxModule } from 'ngx-parallax';
import { NguCarouselModule } from '@ngu/carousel';
import { StickyModule } from 'ng2-sticky-kit';
import { StarRatingModule } from 'angular-star-rating'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './home/main/main.component';
import { SummaryComponent } from './home/summary/summary.component';
import { PromoVideoComponent } from './home/promo-video/promo-video.component';
import { FooterComponent } from './home/footer/footer.component';
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
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { ContactComponent } from './contact/contact.component';
import { MenuCarouselComponent } from './carousels/menu-carousel/menu-carousel.component';
import { OffersCarouselComponent } from './carousels/offers-carousel/offers-carousel.component';
import { BlogCarouselComponent } from './carousels/blog-carousel/blog-carousel.component';
import { PanelComponent } from './global/accordion/panel/panel.component';
import { AccordionComponent } from './global/accordion/accordion.component';
import { RouterModule } from '@angular/router';
import { ParallaxFooterComponent } from './global/parallax-footer/parallax-footer.component';
import { BlockquoteComponent } from './global/blockquote/blockquote.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SummaryComponent,
    PromoVideoComponent,
    FooterComponent,
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
    SpecialOffersComponent,
    ContactComponent,
    MenuCarouselComponent,
    OffersCarouselComponent,
    BlogCarouselComponent,
    PanelComponent,
    AccordionComponent,
    ParallaxFooterComponent,
    BlockquoteComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule,
    ParallaxModule,
    NguCarouselModule,
    StickyModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
