import React from 'react';
import { ListItem, Label, Percentage } from './StatisticsItem.styled';
import PropTypes from 'prop-types';

const StatisticsItem = ({ data }) => {
	return (
		<ListItem>
			<Label>{data.label}</Label>
			<Percentage>{data.percentage}%</Percentage>
		</ListItem>
	);
};

StatisticsItem.propTypes = {
	data: PropTypes.shape({
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	}),
};

export default StatisticsItem;
