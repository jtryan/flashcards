import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Platform, FlatList, Dimensions, ScrollView} from 'react-native'
import {connect} from 'react-redux'

import {fetchDecks} from '../utils/api'
import {getDecks} from '../actions/index'
import DeckCard from './DeckCard'


class DeckList extends Component {

	static navigationOptions = {
    title: 'Flash Cards',
  };

	componentDidMount() {
		const {dispatch} = this.props
		fetchDecks().then(decks => dispatch(getDecks(decks)))
	}

	renderItem = ({item}) => (
			<View style={styles.item}>
				<TouchableOpacity onPress={() =>
						this.props.navigation.navigate('DeckDetails', item)}>
					<DeckCard
							title={item.title}
							questions={item.questions}/>
				</TouchableOpacity>
			</View>
	);


	render() {
		const {decks} = this.props
		return (
			<ScrollView>
				<FlatList
					data={Object.values(decks).sort((a, b) => a.title > b.title)}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => item.title}
				/>
			</ScrollView>
		)
	}

}

function mapStateToProps(state) {
	return {
		decks: state,
	}
}

const styles = StyleSheet.create({
	deck: {
    flex: 1,
    padding: 20,
		height: Dimensions.get('window').height
	},
});

export default connect(mapStateToProps)(DeckList)