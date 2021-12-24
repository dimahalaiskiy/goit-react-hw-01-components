import React from 'react';
import StatisticsItem from './StatisticsItem/StatisticsItem';
import { Container, Heading, List } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
	return (
		<Container>
			{title ? <Heading>{title}</Heading> : ''}
			<List>
				{stats.map((stat) => {
					return <StatisticsItem key={stat.id} data={stat} />;
				})}
			</List>
		</Container>
	);
};

export default Statistics;
