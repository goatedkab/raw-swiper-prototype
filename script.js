// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');


const property_cards = [
  {url:  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  address: 'your mums house'},
  {url:  'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
  address: 'your dads house'},
]








// variables
let cardCount = 0;


// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: property_cards[cardCount % property_cards.length].url,
    address: property_cards[cardCount % property_cards.length].address,
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running'; //activates the like button
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';//activates the dislike button
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
console.log(card.imageUrl)
}


// first 5 cards
for (let i = 0; i < 3; i++) {
  appendNewCard();
}
