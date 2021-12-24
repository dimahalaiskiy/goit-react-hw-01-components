import styled from '@emotion/styled';

export const Container = styled.section`
	margin: 0 auto;
	width: 250px;
	height: 100%;
	background-color: white;
	border: 1px solid gray;
	text-align: center;
	margin-top: 20px;
`;

export const Heading = styled.h2`
	font-size: 26px;
	border-bottom: 1px solid green;
	margin: 0;
	padding: 20px;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding-left: 0px;
	margin: 0px;
`;
