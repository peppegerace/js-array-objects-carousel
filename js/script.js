// dichiaro le variabili
const itemWrapper = document.querySelector('.items-wrapper');
const thumbsWrapper = document.querySelector('.thumbs-wrapper');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

// creo l'array contenente le immagini e le informazioni delle stesse
const images = [
  {
    photo: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    photo: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    photo: 'img/03.webp',
    title: 'Fortnite',
    description: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
  },
  {
    photo: 'img/04.webp',
    title: 'Stray',
    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
  },
  {
    photo: 'img/05.webp',
    title: 'Marvel\'s Avengers',
    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
  
// Inizializzo l'indice corrente per la prima immagine nel carosello
let currentIndex = 0;

// Ciclo for of per inserire le immagini nell'itemsWrapper
for (let cards of images) {
  
  console.log(cards);
  console.log(cards.photo)
  console.log(cards.title)
  console.log(cards.description)

  const card = document.createElement('div')
  card.classList.add('image', 'hide')

  card.innerHTML = `
  <img src='${cards.photo}'></img>
  <div class='title'>
    <h2>${cards.title}</h2>
    <span>${cards.description}</span>
  </div>`
  
 ;
  itemWrapper.append(card)
}

// Ciclo for per inserire le immagini
for (let i = 0; i < images.length; i++) {
  thumbsWrapper.innerHTML += `<img src='${images[i].photo}' data-index='${i}' class='thumbnail ${i === currentIndex ? "active" : ""}'></img>`;
}


// Mostra la prima immagine all'avvio
itemWrapper.querySelector('.image').classList.remove('hide');
thumbsWrapper.querySelector('img').classList.remove('hide');

let autoSkip = setInterval(skipImage, 7000);


// Event listener per il pulsante next
btnNext.addEventListener('click', function () {
 skipImage()
});

// Event listener per il pulsante prev
btnPrev.addEventListener('click', function () {
  const currentImage = itemWrapper.querySelector(`.image:nth-child(${currentIndex + 1})`);
  const currentThumbnail = thumbsWrapper.querySelector(`img[data-index='${currentIndex}']`);

  // Nascondi l'immagine corrente
  currentImage.classList.add('hide');
  // Rimuovi la classe active dalla miniatura corrente
  currentThumbnail.classList.remove('active');

  // Decrementa l'indice
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  // Mostra l'immagine precedente
  const prevImage = itemWrapper.querySelector(`.image:nth-child(${currentIndex + 1})`);
  const prevThumbnail = thumbsWrapper.querySelector(`img[data-index='${currentIndex}']`);
  prevImage.classList.remove('hide');
  // Aggiungi la classe active alla miniatura precedente
  prevThumbnail.classList.add('active');
});


// funzione per scorrere l'immagine in avanti
function skipImage() {
  const currentImage = itemWrapper.querySelector(`.image:nth-child(${currentIndex + 1})`);
  const currentThumbnail = thumbsWrapper.querySelector(`img[data-index='${currentIndex}']`);

  // Nascondi l'immagine corrente
  currentImage.classList.add('hide');
  // Rimuovi la classe active dalla miniatura corrente
  currentThumbnail.classList.remove('active');

  // Incrementa l'indice
  currentIndex = (currentIndex + 1) % images.length;

  // Mostra l'immagine successiva
  const nextImage = itemWrapper.querySelector(`.image:nth-child(${currentIndex + 1})`);
  const nextThumbnail = thumbsWrapper.querySelector(`img[data-index='${currentIndex}']`);
  nextImage.classList.remove('hide');
  // Aggiungi la classe active alla miniatura successiva
  nextThumbnail.classList.add('active');
}