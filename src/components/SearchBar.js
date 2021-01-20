import React from 'react';


// need to use class to handle user input
class SearchBar extends React.Component {
	// default value
	state = { term: '' };
	onFormSubmit = (e) => {
		// everytime we use a form
		e.preventDefault();
		// as it is a class you need the this
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={ this.onFormSubmit } className="ui form">
					<div className="field">
						<label style={ { color: "#008B8B" } }>Image Search</label>
						<input
							type="text"
							// store data in components (react world)
							value={ this.state.term }
							// when we call setState the component re-renders
							onChange={ e => this.setState({ term: e.target.value }) }
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
