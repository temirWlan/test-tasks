import * as storage from '../services/storage';
import Card from '../components/Card';

export const showCards = (parentSelector, cards) => {
	const parent = document.querySelector(parentSelector);
	const currentPage = storage.get('state') ? storage.get('state').currentPage : 1;
	const cardsCount = storage.get('state') ? storage.get('state').cardsCount : 12;
	const m = (currentPage - 1) * cardsCount;

	if (Array.isArray(cards) && cards.length) {
		for (let i = m; i < cards.length; i++) {
			if (!cards[i] || i === currentPage * cardsCount) {
				break;
			}
			
			parent.insertAdjacentHTML('beforeend', new Card(cards[i]).init());
		}
	}
}

export const setCardsCount = (triggerSelector, countFieldSelector, attribute) => {
	const triggers = document.querySelectorAll(triggerSelector),
			countField = document.querySelector(countFieldSelector);
	
	triggers.forEach(trigger => {
		trigger.addEventListener('click', (e) => {
			e.preventDefault();

			if (attribute && attribute.length) {
				const value = trigger.getAttribute(attribute);

				storage.update('state', {
					...storage.get('state'),
					cardsCount: parseInt(value)
				})

				countField.textContent = value;
				document.location.reload();
			}
		});
	})
};