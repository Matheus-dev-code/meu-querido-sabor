const carrossel = document.querySelector('.carrossel-images');
const images = document.querySelectorAll('.carrossel-images img');
const totalImages = images.length;

let index = 0;
let interval = setInterval(nextImage, 3000);

function showImage(i) {
  index = (i + totalImages) % totalImages;
  carrossel.style.transform = `translateX(-${index * 100}vw)`;
}

function nextImage() {
  showImage(index + 1);
}

function prevImage() {
  showImage(index - 1);
}


document.querySelector('.next').addEventListener('click', () => {
  nextImage();
  resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

carousel.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
carousel.parentElement.addEventListener('mouseleave', () => interval = setInterval(nextImage, 3000));