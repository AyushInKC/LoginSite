const slides = document.querySelectorAll(".images img");
const nextbtn =document.querySelector(".next")
var count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  count--;
  if (count < 0) {
    count = 3;  
  }
  slideImage();
};

const goNext = () => {
  count++;
  if (count >= 4) {
    count = 0;  
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

setInterval(()=>{
  nextbtn.click()
},2000)