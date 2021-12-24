import React from 'react';
import { Card, FriendStatus, CardImg, Heading } from './FriendsListItem.styled';
import PropTypes from 'prop-types';

const FriendsListItem = ({ friend }) => {
	return (
		<Card>
			<FriendStatus isOnline={friend.isOnline}></FriendStatus>
			<CardImg src={friend.avatar} alt='User avatar' width='48' />
			<Heading>{friend.name}</Heading>
		</Card>
	);
};

FriendsListItem.propTypes = {
	friend: PropTypes.shape({
		isOnline: PropTypes.bool.isRequired,
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
};

export default FriendsListItem;
