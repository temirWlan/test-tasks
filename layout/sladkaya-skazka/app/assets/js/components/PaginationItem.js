import * as storage from '../services/storage';
import Component from '../services/component';
import createElement from '../services/createElement';

export default class PaginationItem extends Component {
	constructor(label) {
		super();
		this.state = {
			label
		};
	}

	render() {
		this.link = createElement('a', { classes: ['pagination__item-link'], attributes: [['href', '#']] }, this.addZero(this.state.label));
		this.component = createElement('li', { classes: ['pagination__item'] }, '', [this.link]);
	}

	addEventHandlers() {
		this.link.addEventListener('click', (e) => {
			e.preventDefault();

			this.setCurrentPage();
		})
	}

	setCurrentPage() {
		const state = storage.get('state');

		if (state && state.currentPage) {
			storage.update('state', {
				...state,
				currentPage: this.state.label
			});
			document.location.reload();
		}
	}

	addZero(n) {
		return n < 10 ? `0${n}` : `${n}`;
	} 
}