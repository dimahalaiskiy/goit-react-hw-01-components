import React from 'react';
import PropTypes from 'prop-types';

import {
	ProfileCard,
	Img,
	Heading,
	Paragraph,
	List,
	ListItem,
	Label,
	Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
	return (
		<ProfileCard>
			<>
				<Img src={avatar} alt='User avatar' />
				<Heading>{username}</Heading>
				<Paragraph>@{tag}</Paragraph>
				<Paragraph>{location}</Paragraph>
			</>
			<List>
				<ListItem>
					<Label>Followers</Label>
					<Quantity>{followers}</Quantity>
				</ListItem>
				<ListItem>
					<Label>Views</Label>
					<Quantity>{views}</Quantity>
				</ListItem>
				<ListItem>
					<Label>Likes</Label>
					<Quantity>{likes}</Quantity>
				</ListItem>
			</List>
		</ProfileCard>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
