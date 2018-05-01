import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { fetchDeck } from '../utils/api'
import { connect } from 'react-redux'
import { black, white, red, green, orange } from '../utils/colors'


class DeckDetails extends Component {
  static navigationOptions = {
    title: 'Quiz',
  };

  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title].questions

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subHeading}>{questions.length} cards</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {
            this.props.navigation.navigate('AddQuestion', {
                title,
                questions,
            })
          }}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => {
            this.props.navigation.navigate('TakeQuiz', {
                title,
                questions,
            })
          }}
        >
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: black
  },
  subHeading: {
    fontSize: 18,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: red,
  },
  addButton: {
    height: 60,
    width: 200,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
    borderRadius: 3
  },
  startButton: {
    height: 60,
    width: 200,
    backgroundColor: 'green',
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
    alignItems: 'center'
  },
})

    
function mapStateToProps(state) {
  console.log(state)
  return{
    decks: state
  }
}

export default connect(mapStateToProps)(DeckDetails)