// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const galleryConteiner = document.querySelector('.gallery')
const cardMarkup = createGalleryBlock(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend', cardMarkup);


// console.log(createGalleryBlock(galleryItems));
  

function createGalleryBlock(galleryItems) {
    return galleryItems.map(({original,preview,description}) =>{
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join('');
} 
    
 new SimpleLightbox('.gallery__item', { captionsData: "alt",
  captionDelay: 250, });