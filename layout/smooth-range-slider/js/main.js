import form from './modules/form.js';
import rangeInput from './modules/rangeSlider.js';

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');

  wrapper.append(rangeInput(0, 1000, 20));
});