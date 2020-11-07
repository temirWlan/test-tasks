window.addEventListener('DOMContentLoaded', () => {
	async function getData(url, key) {
		const data = await fetch(url);

		if (!data.ok) {
			throw new Error('Could not get data');
		}

		return await data.json();
	}

	const data = getData('./entities.json')
						.then(res => generateCards(res.response, '.card-list'))
						.catch(() => new Error());

	function generateCards(data, parentSelector) {
		const parent = document.querySelector(parentSelector);

		data.forEach(item => {
			const { 
				type,
				imgSrc,
				attributes: {
					title,
					rooms,
					address: {
						city,
						street,
						house,
						room
					},
					area,
					unit
				},
				relationships: {
					attributes: {
						first_name,
						last_name,
						middle_name
					}
				}
			} = item;
			
			
			const card = document.createElement('div');
			card.classList.add('card');
			card.dataset.type = type;

			card.insertAdjacentHTML('beforeend', `
				<div class="card__image-block image-block">
					<img src="${imgSrc}" alt="apartment">
				</div>
				<div class="card__description">
					<h3 class="card__title">${title}</h3>
					<div class="card__text">
						<span>Количество комнат:</span>
						<span>${rooms}</span>
					</div>
					<div class="card__text">
						<span>Адрес:</span>
						<span>
							${city},
							${street} ${house}
							кв. ${room}
						</span>
					</div>
					<div class="card__text">
						<span>Площадь:</span>
						<span>${area}${unit}</span>
					</div>
					<div class="card__text">
						<span>Консультант:</span>
						<span>
							${last_name} ${first_name} ${middle_name}
						</span>
					</div>
				</div>
			`);

			parent.append(card);
		});
	}

});