import createElement from '../services/createElement';

export function addSlides(parent, selectors) {
  const { slideSelectors, imgSelectors } = selectors;
  const slide = createElement('div', slideSelectors, '', [
    createElement('img', imgSelectors)
  ]);

  if (parent) {
    parent.append(slide);
  }
}

export function initSliderCard(containerSelector) {

	new Swiper(containerSelector, {
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      spaceBetween: 10,
      freemode: true,
      pagination: {
        el: '.pagination-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 3
        }
      }
   });
}

function addHandler(itemSelector, activeClass) {
  const items = document.querySelectorAll(itemSelector);

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      // if ()
    })
  });
}

export function showSlides(containerSelector, wrapperSelector, arr) {
  const wrapper = document.querySelector(wrapperSelector);

  for (let i = 0; i < arr.length; i++) {
    const { imgSrc, alt } = arr[i];

    addSlides(wrapper, {
      slideSelectors: {
        classes: ['page__slide', 'swiper-slide']
      },
      imgSelectors: {
        attributes: [
          ['src', imgSrc],
          ['alt', alt]
        ]
      }
    });
  }

  initSliderCard(containerSelector);
}

export function toggleCardSlides(triggerSelector) {
  const triggers = document.querySelectorAll(triggerSelector);

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => e.preventDefault());
  })
}