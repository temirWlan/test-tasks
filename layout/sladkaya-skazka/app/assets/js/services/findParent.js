/**
 * @param {string} childSelector
 * @param {string} parentSelector
 * @param {string} searchType - 'className' || 'tag' || 'attribute'
 * @returns {object} 	
 */

export default function findParent(childSelector, parentSelector, searchType) {
	if (childSelector === parentSelector) {
		const parent = document.querySelector(parentSelector);
		return parent;
	}

	switch(searchType) {
		case 'className':
			if (childSelector)
			break;
		case 'tag': 
			break;
		case 'attribute': 
			break;
	}
}