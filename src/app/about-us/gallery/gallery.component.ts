import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryService } from './../../shared/gallery.service';
import { GalleryImage } from './../../shared/gallery.model';
import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.sass"]
})
export class GalleryComponent implements OnInit {
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight

  images: Array<GalleryImage> = []

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 1000,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    animation: "lazy"
  };

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService
      .getGallery()
      .then(images => this.images = images)
  }
}
