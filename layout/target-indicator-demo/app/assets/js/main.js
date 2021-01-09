window.addEventListener('DOMContentLoaded', () => {
	const sliderInput = document.querySelector('.slider__input'),
				widgetTip = document.querySelector('.widget__tip');
	const current = document.getElementById('current'),
				remainder = document.getElementById('remainder'),
				total = document.getElementById('total');
	let left
			remainder;

	const removeCurrency = n => +n.replace(/\$/g, '');

	current.style.left = '0%';

	sliderInput.addEventListener('input', () => {
		left = Math.floor(100 / +sliderInput.max) * +sliderInput.value;

		current.textContent = `$${sliderInput.value}`;
		remainder.textContent = +removeCurrency(total.textContent) - +sliderInput.value;

		current.style.left = `${left}%`;
	});
});