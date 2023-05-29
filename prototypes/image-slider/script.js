const img_srcs = [
  "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg",
  "https://www.homeviews.com/wp-content/uploads/2021/10/What-does-terraced-house-mean-1980x1137.jpg?x82599",
  "https://rew-feed-images.global.ssl.fastly.net/bright/_cloud_media/all/residential/vaar2023956-1-bf37b46c2c859b0a7ce126eff1d1fe79-m.jpg"
  ]

let slideIndex = 1;



const slideshow = document.getElementById("slideshow");
const dotHolder = document.createElement("div");
dotHolder.classList.add('dot-holder');
for(var i = 0, len = img_srcs.length;i<len;i++){
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotHolder.append(dot);
}
slideshow.appendChild(dotHolder);
const dotholder = document.getElementsByClassName("dot-holder");



showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;  
  let houseimage = document.getElementById("houseimage");
  let dots = document.getElementsByClassName("dot");
  if (n > img_srcs.length) {slideIndex = 1}
  if (n < 1) {slideIndex = img_srcs.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  houseimage.src = img_srcs[slideIndex-1]
  console.log(dots)
  dots[slideIndex-1].className += " active";
}

