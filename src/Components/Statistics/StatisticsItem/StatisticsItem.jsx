import React from 'react';
import { ListItem, Label, Percentage } from './StatisticsItem.styled';

const StatisticsItem = ({ data }) => {
	return (
		<ListItem>
			<Label>{data.label}</Label>
			<Percentage>{data.percentage}%</Percentage>
		</ListItem>
	);
};

export default StatisticsItem;
