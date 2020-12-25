import Component from '../services/component';
import createElement from '../services/createElement';


export default class Card extends Component {
	constructor({ title, description, imgSrc, country, year, productCode }) {
		super();
		this.state = {
			title, 
			description, 
			imgSrc, 
			country, 
			year, 
			productCode
		};
	}

	render() {
		this.component = ` 
			<li class="page__card card">
				<a href="#">
					<div class="card__wrapper">
						<div class="card__image-block image-block">
							<img src="${this.state.imgSrc}" alt="${this.state.title}">
						</div>
						<div class="card__text">
							<span class="card__desc">${this.state.country}</span>
						   <span class="card__caption">
						   	${this.state.title}
						   </span>
						   <p class="card__description">
						   	${this.state.description}
						   </p>
						</div>
						<div class="card__footer">
							<span>
								<img src="assets/img/icons/cube.svg" alt="cube">
								${this.state.year} г.
							</span>
							<span>${this.state.productCode}</span>
						</div>
					</div>
				</a>
			</li>
		`;
		
		// this.component = createElement('li', { classes: ['page__card', 'card'] }, '', [
		// 	createElement('a', { attributes: [['href', '#']] }, '', [
		// 		createElement('div', { classes: ['card__wrapper'] }, '', [
		// 			createElement('div', { classes: ['card__image-block', 'image-block'] }, '', [
		// 				createElement('img', { attributes: [['src', this.state.imgSrc], ['alt', this.state.alt]] })
		// 			]),
		// 			createElement('div', { classes: ['card__text'] }, '', [
		// 				createElement('span', { classes: ['card__desc'] }, this.state.country),
		// 				createElement('span', { classes: ['card__caption'] }, this.state.caption),
		// 				createElement('p', { classes: ['card__description'] }, this.state.description)
		// 			]),
		// 			createElement('div', { classes: ['card__footer'] }, '', [
		// 				createElement('span', null, '', [
		// 					createElement('img', { attributes: [['src', 'assets/img/icons/cube.svg'], ['alt', 'cube']] }),
		// 				]),
		// 				createElement('span', null, this.state.productCode)
		// 			])
		// 		])
		// 	])
		// ]);
	}
}