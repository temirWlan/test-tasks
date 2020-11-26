import findParent from '../services/findParent';

export function addToCart(triggerSelector, counterSelector, cardClass, activeClass) {
	const triggers = document.querySelectorAll(triggerSelector);
	const counterField = document.querySelector(counterSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', e => {
			e.preventDefault();

			if (e.target.parentElement.classList.contains(triggerSelector.slice(1))) {
				const parent = findParent(e.target, cardClass);
				parent.classList.toggle(activeClass);
				const cards = document.querySelectorAll(`.${activeClass}`);
				counterField.textContent = cards.length;
			} 
		});
	});
}

export function showCartContent() {
	
} 