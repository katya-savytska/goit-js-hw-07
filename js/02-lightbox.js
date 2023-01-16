import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCard(galleryItems);

function createCard(galleryItems){
    return galleryItems
    .map(({preview, original, description})=>{
        return `<li><a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src='${preview}' alt='${description}'>
        </a></li>`;})
        .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== `IMG`){
        return;
    }
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(gallery.options)
console.log(gallery.options.captionsData)
console.log(gallery.options.captionDelay)