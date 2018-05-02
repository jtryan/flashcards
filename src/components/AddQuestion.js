import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity, StyleSheet, Alert, View, Platform} from 'react-native'
import { addCardToDeck } from '../actions'
import { addCard } from '../utils/api'
import { connect } from 'react-redux'
import { black, white, green } from '../utils/colors'

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
		this.setState({
      question: '', 
      answer: ''
    })
  }

	render() {
    const {question, answer} = this.state;

		return (

				<View style={styles.container}>
					<Text style={[styles.title, {marginTop: 64}]}>Question</Text>
					<TextInput
							style={styles.textInput}
							placeholder="Type question here"
							value={this.state.question}
              onChangeText={(question) => this.setState({question})}
              multiline={true}
					/>
          <Text style={[styles.title, {marginTop: 64}]}>Answer</Text>
					<TextInput
							style={styles.textInput}
							placeholder="Type answer here"
							value={this.state.answer}
              onChangeText={(answer) => this.setState({answer})}
              multiline={true}
					/>

					<TouchableOpacity
							style={styles.okButton}
							onPress={this.verifyQnA}
					>
						<Text style={styles.btnText}>Submit</Text>
					</TouchableOpacity>

				</View>
		)
	}

}


const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
	},
	okButton: {
		height: 60,
    width: 200,
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
    borderRadius: 3,
  },
  title: {
    fontSize: 32,
    justifyContent: 'center',
    alignItems: 'center',
    color: black,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  textInput: {
    height: 40,
    width: 300,
    fontSize: 15,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: black,
    borderWidth: 1
  }
})

function mapStateToProps(state) {
  return {
    decks: state  
  }
}

export default connect(mapStateToProps)(AddQuestion)