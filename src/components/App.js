import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
	// empty array because it will be a list of images
	state = { images: [] };

	onSearchSubmit = async (term) => {
		// make request with axios taking the term from the user
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});
		// I will need to get this response link to the state
		// console.log(response.data.results);
		this.setState({ images: response.data.results });
	};


	render() {
		return (
			<div style={ { background: "#008B8B", margin: "0" } }>
				<div className="ui container" style={ { paddingTop: '10px' } }>
					{/* this props could be named anything because its not normal jsx element its a component */ }
					<SearchBar onSubmit={ this.onSearchSubmit } />
					<ImageList images={ this.state.images } />
				</div>
			</div>
		);
	}
}

export default App;
