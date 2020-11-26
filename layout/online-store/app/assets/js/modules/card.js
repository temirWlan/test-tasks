import create from '../services/create';


class Card {
	constructor(parentSelector, data) {
		this.parent = document.querySelector(parentSelector);
		this.data = data;
	}

	init() {
		this.render();
	}

	render() {
		this.card = document.createElement('div');
		this.parent.append(this.card);
	}
}

export class PageCard extends Card {
	constructor(parentSelector, data) {
		super(parentSelector, data);
		this.apiBase = 'https://frontend-test.idaproject.com';
	}

	render() {
		const { category, id, name, photo, price, rating } = this.data;
		const title = name.split(' ').map(str => str[0] + str.slice(1).toLowerCase()).join(' ');
		
		const card = document.createElement('li');
		card.classList.add('page__card', 'card');
		card.dataset.id = id;
		card.dataset.category = category;

		card.innerHTML = ` 
			<div class="card__panel">
				<a class="card__rating item__rating" href="#">
					<img src="assets/img/icons/star.svg" alt="star" />
					<span class="card__rating item__rating-ratio" data-ratio="${rating}">${rating}</span>
				</a>
				<a class="card__cart" href="#">
					<img src="assets/img/icons/cart.svg" alt="star" />
				</a>
			</div>
			<div class="card__image-block item__image-block">
				<img src="${this.apiBase}${photo}" alt="${name}">
			</div>
			<div class="card__description">
				<a class="card__caption item__caption" href="#">
					${title}
				</a>
				<b class="card__price item__price">
					${price} ₽
				</b>
			</div>
		`;

		this.parent.append(card);
	}
}



/*
function createCard(data) {
	const { title, ratio, imgSrc, alt, price } = data;
	const card = document.createElement('li');
	card.classList.add('page__card', 'card');

	card.innerHTML = `
		<div class="card__panel">
			<a class="card__rating item__rating" href="#">
				<img src="assets/img/icons/star.svg" alt="star" />
				<span class="card__rating item__rating-ratio" data-ratio="4.5">4.5</span>
			</a>
			<a class="card__cart" href="#">
				<img src="assets/img/icons/cart.svg" alt="star" />
			</a>
		</div>
		<div class="card__image-block item__image-block">
			<img src="${imgSrc}" alt="${alt}">
		</div>
		<div class="card__description">
			<span class="card__caption item__caption">
				${title}
			</span>
			<b class="card__price item__price">
				${price}
			</b>
		</div>
	`
} 

*/

/*
this.rating = create('a', { classes: ['card__rating', 'item__rating'], attributes: [['href', '#']] }, null, [
			create('img', { attributes: [['src', 'start']] }),
			create('span', { classes: ['card__rating', 'item__rating-ratio'], attributes: [['data-ratio', `${ratio}`]] }, ratio)
		]);
		
		this.cart = create('a', { classes: ['card__cart'], attributes: [['href', '#']] }, null, [
			create('img', { attributes: [['src', 'assets/img/icons/cart.svg']] })
		]);

		this.card = create('li', { classes: ['page__card', 'card'] }, null, [
			create('div', { classes: ['card__panel'] }, null, [
				create('a', { classes: ['card__panel'] }, null, [
					this.rating,
					this.cart
				])
			])
		]);
*/