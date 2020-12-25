import PaginationItem from '../components/PaginationItem';

export const showPagination = (parentSelector, currentItemsCount, allItemsCount) => {
	const parent = document.querySelector(parentSelector);
	const n = Math.ceil(allItemsCount / currentItemsCount);

	for (let i = 0; i < n; i++) {
		parent.append(new PaginationItem(i + 1).init())
	}
}