import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity, StyleSheet, Alert, View } from 'react-native'
import { addCardToDeck } from '../actions'
import { addCard } from '../utils/api'
import { connect } from 'react-redux'

class AddQuestion extends Component {

  componentWillMount() {
		this.setState({
      question: '',
      answer: ''
		})
	}

	verifyQnA = () => {
		const {question, answer} = this.state
		const {title, questions} = this.props.navigation.state.params
	
		if (question === '') {
      Alert.alert('Required', 'Question cannot be empty')
      return
    }
    
    if (answer === '') {
      Alert.alert('Required', 'Answer cannot be empty')
      return
    }
    
    const params = {title, questions, question, answer}
    this.props.dispatch(addCardToDeck(params))
    addCard({
      card: {question, answer},
      deckTitle: title
    })

    Alert.alert('Success', 'Question addedd successfully',
        [
          {
            text: 'OK', onPress: () => this.props.navigation.goBack()
          }
        ],
    )
		this.setState({question: '', answer: ''})
	
  }

	render() {
    const {question, answer} = this.state;

		return (

				<View syle={style.container}>
					<Text>Question</Text>
					<TextInput
							style={{height: 40}}
							placeholder="Type question here"
							value={this.state.question}
							onChangeText={(question) => this.setState({question})}
					/>
          <Text>Answer</Text>
					<TextInput
							style={{height: 40}}
							placeholder="Type answer here"
							value={this.state.answer}
							onChangeText={(answer) => this.setState({answer})}
					/>

					<TouchableOpacity
							style={style.okButton}
							onPress={this.verifyQnA}
					>
						<Text>Submit</Text>
					</TouchableOpacity>

				</View>
		)
	}

}


styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	okButton: {
		height: 50,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 40,
		marginRight: 40,
		padding: 10,
		borderRadius: 4
	}
})

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(AddQuestion)