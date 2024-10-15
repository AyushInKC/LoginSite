const slides = document.querySelectorAll(".images img");
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
