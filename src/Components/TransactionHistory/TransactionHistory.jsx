import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import { Table, TableHeading } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
	return (
		<>
			<Table>
				<TableHeading>Type</TableHeading>
				<TableHeading>Amount</TableHeading>
				<TableHeading>Currency</TableHeading>

				{transactions.map((transaction) => {
					return (
						<TransactionHistoryItem key={transaction.id} transaction={transaction} />
					);
				})}
			</Table>
		</>
	);
};

TransactionHistory.propTypes = {
	transaction: PropTypes.arrayOf(PropTypes.object.isRequired),
	transaction: PropTypes.shape({
		id: PropTypes.number.isRequired,
	}),
};

export default TransactionHistory;
