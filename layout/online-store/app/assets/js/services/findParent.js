export default function findParent(item, className) {
	if (item.classList.contains(className)) {
		return item;
	} else {
		return findParent(item.parentElement, className);
	}
}