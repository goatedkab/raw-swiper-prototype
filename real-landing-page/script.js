// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');


const property_cards = [
  {url:  ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          "https://www.homeviews.com/wp-content/uploads/2021/10/What-does-terraced-house-mean-1980x1137.jpg?x82599",
          "https://rew-feed-images.global.ssl.fastly.net/bright/_cloud_media/all/residential/vaar2023956-1-bf37b46c2c859b0a7ce126eff1d1fe79-m.jpg"
        ],
  address: '1 Hyde Park'},
  {url:  ['https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'],
  address: '14 Ongar rd'},
]








// variables
let cardCount = 0;


// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: property_cards[cardCount % property_cards.length].url[0],
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
