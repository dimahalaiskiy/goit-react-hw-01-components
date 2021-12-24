import styled from '@emotion/styled';

export const Table = styled.div`
	width: 700px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 auto;
	margin-top: 30px;
	text-align: center;
	border: 1px solid black;
`;

export const TableHeading = styled.h3`
	font-size: 20px;
	padding: 10px;
	margin: 0;
	background-color: rgba(88, 33, 142, 0.3);
	border-right: 0.5px solid black;
	border-bottom: 0.5px solid black;
`;
