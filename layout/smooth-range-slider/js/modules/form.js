import getParents from '../services/getParents.js';
import postData from '../services/postData.js';

export default function form() {
  const popupOpen = document.querySelector('.popup_open'),
        popupInner = document.querySelector('.popup_inner'),
        urlElem = document.getElementByID('url');
  const URL = urlElem.value;
  
  
  
  popupOpen.addEventListener('click', () => {
    const data = `url=${URL}`,
          parents = getParents(urlElem, 'form'),
          form = parents[parents.length - 1];
    
    postData(form.action, data)
      .then(res => {
        const title = document.createElement('h1');
        title.textContent = res.title;
          
        popupOpen.classList.add('open');
        popupInner.classList.add('open');
        popupInner.textContent = res.text;
        popupInner.prepend(title);
      });
  });
}