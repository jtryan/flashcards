import React, { Component }from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import { black, red } from '../utils/colors'

export default class DeckCard extends Component {
	render() {
		const {title, questions} = this.props;

		return (
    <View style={styles.deck}>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subHeading}>
					{questions.length} cards
				</Text>
			</View>
		</View>
    )
	}
}

const styles = StyleSheet.create({
	deck: {
		flexDirection: 'row',
		marginTop: 16,
		height: 100,
		backgroundColor: '#aaa',
		justifyContent: 'center',
		alignItems: 'center'
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: black,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  subHeading: {
    fontSize: 18,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: red,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  }
})