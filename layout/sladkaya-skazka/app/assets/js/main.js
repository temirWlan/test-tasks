// import * as data from './services/data';
import data from '../../../db.json';
import * as storage from './services/storage';
import toggleElement from './services/toggleElement';
import { toggleMenu } from './modules/menu';
import { showSlides, toggleCardSlides } from './modules/sliderCard';
import { showCards, setCardsCount } from './modules/cards';
import { showPagination } from './modules/pagination';

window.addEventListener('DOMContentLoaded', () => {
	// DOM elements 
	const cardsCountField = document.querySelector('#product-count');

	// state
	const initialState = {
		cardsCount: 12,
		currentPage: 1
	};

	!storage.get('state') && storage.set('state', initialState);

	// menu
	toggleMenu('.burger', '.header__menu', 'flex-visible', 'invisible');
	
	// slider
	showSlides('.brands-container', '#brands', data.cardSlides.brands);
	showSlides('.licenses-container', '#licenses', data.cardSlides.licenses);
	toggleCardSlides('.page__slider-trigger');

	showCards('.page__card-list', data.cards.sweetPops);

	// dropdown
	cardsCountField.textContent = storage.get('state') ? storage.get('state').cardsCount : '12';

	toggleElement('.page__dropdown-trigger', '.page__select', 'flex-visible', 'invisible');
	setCardsCount('.page__select-option', '#product-count', 'data-cards-count');

	// pagination
	const itemsCount = storage.get('state') ? storage.get('state').cardsCount : 12;
	showPagination('.page__pagination', itemsCount, data.cards.sweetPops.length)
});