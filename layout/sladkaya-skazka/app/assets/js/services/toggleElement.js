export default function toggleElement(triggerSelector, elementSelector, activeClass, inactiveClass) {
	const triggers = document.querySelectorAll(triggerSelector),
			element = document.querySelector(elementSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', (e) => {
			e.preventDefault();

			element.classList.toggle(inactiveClass);

			if (inactiveClass) {
				if (element.classList.contains(inactiveClass)) {
					element.classList.remove(activeClass);
				} else {
					element.classList.add(activeClass);
				}
			} else {
				element.classList.toggle(activeClass);
			}
		})
	});
}