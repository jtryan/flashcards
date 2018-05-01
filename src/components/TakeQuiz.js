import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'



class TakeQuiz extends Component {

  componentWillMount() {
		this.setState({
      correct: 0,
      index: 0,
      showAnswer: 'false'
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
    const currentQuestion = questions.length - index

    return (
      <View>
        { moreQuestions  ? (
          <View>

          <View>
            <Text>{index + 1} / {questions.length}</Text>
          </View>

          <View>
            <Text>{questions[index].question}</Text>
            <TouchableOpacity onPress = {this.showAnswer}>
              <Text>Show Answer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {this.handleCorrect}>
              <Text>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {this.handleIncorrect}>
              <Text>INCORRECT</Text>
            </TouchableOpacity>
          </View>

        
          </View>
        
        
        ) : (
        
            <View>
              <Text>You got {correct} answers correct out of {questions.length} questions!</Text>

              <TouchableOpacity onPress = {this.startQuiz}>
              <Text>Take Quiz</Text>
            </TouchableOpacity>

              <TouchableOpacity onPress = {this.backToDeck}>
              <Text>Go back</Text>
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

export default connect()(TakeQuiz)

/*

Big Text => question[x]
small text(red) Answer

BTN -CORRECT
BTN WRONG

componenet class {
  right:
  wrong:
}

onPress - right += 1
onPress wrong += 1

SCORE Componenet

*/


/*

for question in questions {
  renderquestion()
    [renderquestion]
     red/green => move t next question
}





*/