import React from 'react';
import { Card, FriendStatus, CardImg, Heading } from './FriendsListItem.styled';

const FriendsListItem = ({ friend }) => {
	return (
		<Card>
			<FriendStatus isOnline={friend.isOnline}></FriendStatus>
			<CardImg src={friend.avatar} alt='User avatar' width='48' />
			<Heading>{friend.name}</Heading>
		</Card>
	);
};

export default FriendsListItem;
