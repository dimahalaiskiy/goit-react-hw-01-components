import styled from '@emotion/styled';

export const Card = styled.li`
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const FriendStatus = styled.span`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	margin-left: 10px;
	background-color: ${(props) => {
		return props.isOnline ? 'green' : 'red';
	}};
`;

export const CardImg = styled.img`
	margin-left: 10px;
`;

export const Heading = styled.h3`
	margin-left: 10px;
	font-size: 16px;
`;
