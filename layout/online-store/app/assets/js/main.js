import axios from 'axios';

import { PageCard } from './modules/card';
import { addToCart } from './modules/cart';
import toggleItem from './services/toggleItem';
import handleTabOnClick from './modules/tabs';
import toggleSelect from './modules/select';


window.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.card');
	const cart = document.querySelector('.cart');
	const selectTrigger = document.querySelector('#sort-trigger');
	const select = document.querySelector('.page__panel-select');
	const selectLinks = document.querySelectorAll('.page__panel-select-option-link');

	const API_BASE = 'https://frontend-test.idaproject.com/api';
	const productsUrl = `${API_BASE}/product`;
	const productCategory = `${API_BASE}/product-category`;
	let dataArr = [];
	let category = 1;

	let sortType = 'price';


	toggleItem({
		triggerSelector: '#basket', 
		itemSelector: '.basket-sidebar', 
		closeSelector: '.close-trigger', 
		classes: {
			active: 'visible-cart',
			inactive: 'invisible-cart'
		}
	});

	handleTabOnClick({ 
		triggerClassName: '.page__tabs-list-item', 
		activeClass: 'active-list-item'
	});

	selectTrigger.addEventListener('click', e => {
		e.preventDefault();
		select.classList.toggle('visible');
	});

	selectLinks.forEach(link => {
		link.parentElement.addEventListener('click', e => {
			e.preventDefault();
			const regex = /По /;
			const text = e.target.textContent.replace(regex, '');
			selectTrigger.textContent = text;
			select.classList.remove('visible')

			switch(selectTrigger.textContent) {
				case 'цене':
					sortType = 'price';
					break;
				case 'популярности':
					sortType = 'rating';
					break;
				default: 
					sortType = 'price';
					break;
			}

			showCards(dataArr, category);
		});
	});

	function showCards(arr, categoryType) {
		cards.forEach(card => card.remove());
		category = categoryType; 
		const newArr = arr.filter(({ category }) => category === categoryType).sort((a, b) => b[sortType] - a[sortType]);
		newArr.forEach(item => new PageCard('.page__grid', item).init());
	}

	
	axios.get(productsUrl)
		.then(res => {
			dataArr = [...res.data];
			showCards(dataArr, 3);
		})
		.catch(() => console.log('error'))
		.then(() => addToCart('.card__cart', '#goods-count', 'card', 'selected'));
});