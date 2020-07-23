import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots, 
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
};

class App extends React.Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const filteredRobots = this.props.robots.filter(bot => {
			return bot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
		if (this.props.isPending) {
			return (<h1 className='tc'>LOADING ...</h1>);
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.props.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);