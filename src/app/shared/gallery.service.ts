import { GALLERY_IMAGES } from '../mock-db/mock-gallery';
import { Injectable } from '@angular/core';
import { GalleryImage } from './gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  getGallery(): Promise<Array<GalleryImage>> {
    return Promise.resolve(GALLERY_IMAGES)
  }
}
