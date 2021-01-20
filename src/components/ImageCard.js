import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };

		// create a Ref
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// to early to get the height because the image is not loaded yet (need to add event listener)
		this.imageRef.current.addEventListener('load', this.setSpans);
	}
	// needs to be arrow function so it doesnt get the undefined error
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		// 150 => row height, to know how many rows it needs (+ 1 to be rounded )
		const spans = Math.ceil(height / 10);
		// we need to define state initially
		this.setState({ spans: spans });
	};

	render() {
		// to aviod always calling this.props.image.(what we want)
		const { description, urls } = this.props.image;
		return (
			<div style={ { gridRowEnd: `span ${this.state.spans}` } }>
				<img
					// ref will give info about the DOM node (its jsx)
					ref={ this.imageRef }
					alt={ description }
					src={ urls.regular }
				/>
			</div>
		);
	}
}

export default ImageCard;
