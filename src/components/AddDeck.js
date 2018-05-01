import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Platform, TextInput, Alert} from 'react-native'
import {createDeck} from '../actions'
import {saveDeckTitle} from '../utils/api'
import {connect} from 'react-redux'
import { black, red} from '../utils/colors'
import { bold } from 'ansi-colors';


class AddDeck extends Component {

	componentWillMount() {
		this.setState({
			title: ''
		})
	}

	verifyTitle = () => {
		const entry = this.state
		const {decks} = this.props
	
		if (!entry.title) {
			Alert.alert('Required', 'Deck title cannot be empty')

		} else if (decks[entry.title]) {
			Alert.alert('Exists!', 'Deck title already exists')
		} else {
			const newTitle = {[entry.title]: {title: entry.title, questions: []}}
			this.props.dispatch(createDeck(newTitle))
			saveDeckTitle(newTitle)

			Alert.alert('Success', 'Deck Added',
					[
						{
							text: 'OK', onPress: () => this.props.navigation.navigate('DeckDetails', {
								title: entry.title,
								questions: []
							})
						},
					]
			)

			this.setState({title: ''});
		}
	}


	render() {
		return (

        <View style={{flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center'}}>
					<Text style={{fontSize: 24,
                justifyContent: 'center',
                alignItems: 'center',
                color: black}}>New Title</Text>
					<TextInput
              style={{height: 40,
                      fontSize: 15,
                      marginTop: 32,
                      justifyContent: 'center',
                      alignItems: 'center'}}
							placeholder="Type deck title here"
							value={this.state.title}
							onChangeText={(title) => this.setState({title})}
					/>

					<TouchableOpacity
              style={{
                height: 60,
                width: 200,
                backgroundColor: '#aaa',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                marginTop: 48,
                borderRadius: 3}}
							onPress={this.verifyTitle}
					>
            <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        alignItems: 'center'}}>Add Deck</Text>
					</TouchableOpacity>

				</View>
		)
	}

}


styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
	button: {
		height: 60,
    width: 200,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
    borderRadius: 3
  },
  textInput: {
    height: 40,
    fontSize: 15,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: black
  }
})


function mapStateToProps(state) {
	return {
		decks: state
	}
}


export default connect(mapStateToProps)(AddDeck)