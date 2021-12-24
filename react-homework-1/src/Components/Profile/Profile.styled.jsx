import styled from '@emotion/styled';

export const ProfileCard = styled.div`
	margin: 0 auto;
	width: 250px;
	height: 100%;
	background-color: white;
	border: 1px solid gray;
	text-align: center;
`;

export const Img = styled.img`
	margin-top: 40px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;

export const Heading = styled.h2`
	font-size: 26px;
	margin-bottom: 10px;
`;

export const Paragraph = styled.p`
	font-size: 16px;
	margin: 0px;
	margin-bottom: 5px;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding-left: 0px;
	margin-bottom: 0px;
	margin-top: 40px;
	background-color: rgba(122, 145, 51, 0.3);
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 10px;
	display: flex;
	flex-direction: column;
	border: 0.5px solid gray;
`;

export const Label = styled.span`
	font-size: 12px;
	color: gray;
`;

export const Quantity = styled.span`
	font-family: Calibri;
	font-size: 16px;
	margin-top: 5px;
`;
