function CPDPage() {
  window.location.href = "../../public/CPD1/index.html";
}

function KEPSEK() {
  window.location.href = "../../public/KEPSEK/index.html";
}

document.addEventListener('DOMContentLoaded', function() {
  const cardContents = document.querySelectorAll('.card');

  function checkSlide() {
      cardContents.forEach(cardContent => {
          const windowHeight = window.innerHeight;
          const cardTop = cardContent.getBoundingClientRect().top;
          const isVisible = cardTop < windowHeight * 0.75;

          if (isVisible) {
              cardContent.classList.add('show');
          } else {
              cardContent.classList.remove('show');
          }
      });
  }

  
  checkSlide();
  window.addEventListener('scroll', checkSlide);
});

document.addEventListener('DOMContentLoaded', function() {
  const newsCards = document.querySelectorAll('.news-card');

  function checkSlide() {
      newsCards.forEach(newsCard => {
          const windowHeight = window.innerHeight;
          const cardTop = newsCard.getBoundingClientRect().top;
          const isVisible = cardTop < windowHeight * 0.75;

          if (isVisible) {
              newsCard.classList.add('show');
          } else {
              newsCard.classList.remove('show');
          }
      });
  }

  checkSlide();
  window.addEventListener('scroll', checkSlide);
});