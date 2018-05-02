import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

import { black, red, green } from '../utils/colors'



class TakeQuiz extends Component {

  componentWillMount() {
		this.setState({
      correct: 0,
      index: 0,
      showAnswer: false
    })
  }

  handleIncorrect = () => {
    const {index} = this.state
    this.setState({
      index: index + 1
    })
  }

  showAnswer = () => {
    const {showAnswer} = this.state
    this.setState({
      showAnswer: !showAnswer
    })
  }

  backToDeck = () => {
    this.props.navigation.goBack()
  }

  handleCorrect = (state) => {

    this.setState({
      index: index + 1, 
      correct: correct + 1, 
      showAnswer: false})
  };

  startQuiz = () => {
    this.setState({
      index: 0, 
      correct: 0, 
      showAnswer: false
    })
  }

  render() {
    const {questions} = this.props.navigation.state.params
    const { correct, index, showAnswer } = this.state
    const moreQuestions = index < questions.length

    return (
      <View style={styles.container}>
        { moreQuestions  ? (
          <View>

            <View>
              <Text style={styles.pages}>{index + 1} / {questions.length}</Text>
            </View>
            
            <View>
              <View>
                {showAnswer ? (
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>{questions[index].answer}</Text>

                    <TouchableOpacity onPress={this.showAnswer}>
                      <Text style={styles.subHeading}>Show Question</Text>
                    </TouchableOpacity>

                  </View>) : (
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>{questions[index].question}</Text>

                    <TouchableOpacity onPress={this.showAnswer}>
                      <Text style={styles.subHeading}>Show Answer</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
        </View>
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: green}]}
                onPress = {this.handleCorrect}>
                <Text style={styles.btnText}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, {backgroundColor: red}]}
                onPress = {this.handleIncorrect}>
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
              </View>
        </View>
        
        ) : (
        
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>
                You got {correct} answers correct out of {questions.length} questions!
              </Text>

              <TouchableOpacity
                style={[styles.button, {backgroundColor: green}]}
                onPress = {this.startQuiz}>
              <Text style={styles.btnText}>Take Quiz</Text>
            </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, {backgroundColor: red}]}
                onPress = {this.backToDeck}>
              <Text style={styles.btnText}>Go back</Text>
            </TouchableOpacity>

            </View>
        
        )}
        
      </View>
    )
  }

}


const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingTop:20,
  },
  pages: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16
  },
  title: {
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    color: black,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  subHeading: {
    fontSize: 18,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: red,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
	button: {
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
    borderRadius: 3
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
})

export default connect()(TakeQuiz)
