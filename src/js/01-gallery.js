import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

class Image {
  constructor({ preview, original, description } = {}) {
    this.source = original;
    this.src = preview;
    this.alt = description;
  }
}

const array = [];

createGalleryItemEl(galleryItems);

function createGalleryItemEl(arr) {
  for (const el of arr) {
    const galleryImage = new Image(el);
    array.push(`
<a class="gallery__item" href="${galleryImage.source}">
  <img class="gallery__image" title ="${galleryImage.alt}"  src="${galleryImage.src}" alt="${galleryImage.alt}" />
</a>`);
  }
}

galleryEl.insertAdjacentHTML('beforeend', `${array.join('')}`);

const lightBoxGallery = new SimpleLightbox('.gallery a');
lightBoxGallery.on('show.simplelightbox', function () {});
console.log(lightBoxGallery.defaultOptions.captions);
lightBoxGallery.defaultOptions.captionDelay = 250;
