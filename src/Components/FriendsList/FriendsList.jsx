import React from 'react';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import { Container } from '../Statistics/Statistics.styled';

const FriendsList = ({ friends }) => {
	return (
		<Container>
			{friends.map((friend) => {
				return <FriendsListItem key={friend.id} friend={friend} />;
			})}
		</Container>
	);
};

export default FriendsList;
