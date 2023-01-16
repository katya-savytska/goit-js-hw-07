import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onClick);

function createCard(images) {
    return images
    .map(({preview, original, description}) => {
        return `
        <a class='gallery__link' href='${original}'>
        <img class='gallery__img'
        src='${preview}'
        data-source='${original}'
        alt='${description}'/>
        </a>`;
    })
    .join('');
}

function onClick(event){
    event.preventDefault();

    if (event.target.nodeName !== `IMG`){
        return;
    }
    const instance = basicLightbox.create(`
    <div class='modal'>
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
    `)
    instance.show();
}
