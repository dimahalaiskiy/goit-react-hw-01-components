import React from 'react';
import StatisticsItem from './StatisticsItem/StatisticsItem';
import { Container, Heading, List } from './Statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.array.isRequired,
};

export default Statistics;
