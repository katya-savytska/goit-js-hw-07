import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCard(galleryItems) {
    return galleryItems
    .map(({preview, original, description})=>{
        return `
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'/>
        </a>
        `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onClick);

function onClick(event){
    event.preventDefault();

    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const instance = basicLightbox.create(`
    <div class='modal'>
    <img src='${event.target.dataset.source}'>
    </div>
    `)
    instance.show();
}
