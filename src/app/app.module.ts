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
