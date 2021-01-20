import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';

const ImageListStyle = styled.div`
	display:grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 0 10px;
	grid-auto-rows: 10px;
	img {
		width: 250px;
	}
`;


const ImageList = props => {
	// after map => image => image.description/ image.urls/ image.id OR use {description, id, urls } as param
	const images = props.images.map((image) => {
		// prop should be the same name as defined in ImageCard
		return (<ImageCard key={ image.id } image={ image } />);
	});
	return (
		<ImageListStyle>
			{ images }
		</ImageListStyle>
	);
};

export default ImageList;
