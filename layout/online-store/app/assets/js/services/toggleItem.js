export const add = (item, activeClass) => item.classList.add(activeClass);
export const remove = (item, activeClass) => item.classList.remove(activeClass);

export default function toggleItem(params) {
	const { triggerSelector, itemSelector, closeSelector, classes: { active, inactive } } = params;
	const triggers = document.querySelectorAll(triggerSelector),
			item = document.querySelector(itemSelector),
			closeBtns = document.querySelectorAll(closeSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', e => {
			e.preventDefault();
			add(item, active);
			remove(item, inactive || '');
			document.body.style.overflow = 'hidden';
		});
	});

	closeBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			remove(item, active);
			add(item, inactive || '');
			document.body.style.overflow = '';
		});
	});
}