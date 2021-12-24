import React from 'react';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import { Container } from '../Statistics/Statistics.styled';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
	return (
		<Container>
			{friends.map((friend) => {
				return <FriendsListItem key={friend.id} friend={friend} />;
			})}
		</Container>
	);
};

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendsList;
