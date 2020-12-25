import toggleElement from '../services/toggleElement';

export const toggleMenu = (triggerSelector, menuSelector, activeClass, inactiveClass) => {
	const trigger = document.querySelector(triggerSelector),
			menu = document.querySelector(menuSelector);


	toggleElement(triggerSelector, menuSelector, activeClass, inactiveClass)

	trigger.addEventListener('click', (e) => {
		if (menu.classList.contains(activeClass)) {
			document.body.overflow = 'hidden';
			trigger.classList.add('active-burger');
		} else {
			document.body.overflow = 'auto';
			trigger.classList.remove('active-burger');
		}
	});
}