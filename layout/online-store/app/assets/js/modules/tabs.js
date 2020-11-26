

export default function handleTabOnClick({ triggerClassName, activeClass }) {
	const triggers = document.querySelectorAll(triggerClassName);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', e => {
			e.preventDefault();
			const target = e.target;

			triggers.forEach(trigger => trigger.classList.remove(activeClass));

			if (target.classList.contains(triggerClassName.slice(1))) {
				target.classList.add(activeClass);
			} else if (target.parentElement.classList.contains(triggerClassName.slice(1))) {
				target.parentElement.classList.add(activeClass);
			}
		});
	});	
}