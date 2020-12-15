import create from '../services/create.js';

export default function rangeSlider(min = 0, max = 100, current = 0) {
	const output = create('output', { classes: ['slider__output'], attributes: [['for', 'fader'], ['id', 'volume']] }, '0');
  const rangeInput = create('input', { classes: ['slider__range-input'], attributes: [['id', 'fader'], ['type', 'range'], ['min', min], ['max', max], ['value', current], ['step', 1]] });
  const inputLine = create('span', { classes: ['range-input-line'] });
  const slider = create('div', { classes: ['slider'] }, '', [output, rangeInput]);
  
  output.value = rangeInput.value;

  rangeInput.addEventListener('input', (e) => {
    output.value = e.target.value;
    console.log(e.target.style);
  });

  return slider;
}
