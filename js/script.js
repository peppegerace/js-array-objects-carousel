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
    description: 'Experience the rise of Miles Morale as the new hero masters incredible, explosive new powers to become hi own Spiderman.',
  },
  {
    photo: 'img/02.webp',
    title: 'Ratchet & Clank',
    description: 'Experience the epic adventure of Ratchet & Clank, where the brave duo faces ruthless adversaries and discovers extraordinary weapons while engaging in an incredible struggle for justice and the salvation of the galaxy.',
  },
  {
    photo: 'img/03.webp',
    title: 'Fortnite',
    description: 'Fortnite is an action-packed battle royale game where players compete to be the sole survivor on a dynamic island. Gather resources, build, and outmaneuver rivals in this ever-evolving gaming phenomenon.',
  },
  {
    photo: 'img/04.webp',
    title: 'Stray',
    description: 'Embark on a mysterious adventure in Stray, where you play as a lost cat navigating a futuristic city filled with robots. Solve puzzles, uncover secrets, and forge unexpected alliances as you explore this unique and atmospheric world.',
  },
  {
    photo: 'img/05.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
    description: 'Elevate your gaming experience with Avengers, where you step into the shoes of iconic Marvel superheroes. Unite with friends in online co-op missions, and save the world from formidable threats using your unique superpowers and teamwork.',
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


// Event listener per il pulsante next
btnNext.addEventListener('click', function () {
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