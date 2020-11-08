import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../card';


export default function CardList({ items }) {
	return (
		<List>
			{
				items.map(item => {
					return <Card key={item.id} {...item} />
				})
			}
		</List>
	)
};

CardList.propTypes = {
	items: PropTypes.array.isRequired
};

const List = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;

	@media (max-width: 992px) {
		margin: 0 auto;
		max-width: 90%;
	}

	@media (max-width: 768px) {
		justify-content: center;
	}

	@media (max-width: 375px) {
		max-width: 100%;
	}
`;