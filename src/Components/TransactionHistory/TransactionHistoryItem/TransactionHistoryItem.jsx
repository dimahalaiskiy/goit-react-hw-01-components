import React from 'react';
import { TableItem } from './TransactionHistoryItem.styled';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ transaction }) => {
	return (
		<>
			<TableItem>{transaction.type}</TableItem>
			<TableItem>{transaction.amount}</TableItem>
			<TableItem>{transaction.currency}</TableItem>
		</>
	);
};

TransactionHistoryItem.propTypes = {
	transaction: PropTypes.shape({
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}),
};

export default TransactionHistoryItem;
