import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { fetchDeck } from '../utils/api'
import { connect } from 'react-redux'
import { black, white, red } from '../utils/colors'


class DeckDetails extends Component {
  // static navigationOptions = {
  //   title: 'Cards',
  //   headerMode: 'none'
  // };

  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title].questions

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>{title}</Text>
          <Text>{questions.length} cards</Text>
        </View>
        
        {/* <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {
            this.props.navigation.navigate('AddQuestion', {
                title,
                questions,
            })
          }}
        >
          <Text>Add Card</Text>
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
          <Text>Start Quiz</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})
// styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   title: {
//     fontSize: 24,
//     color: black
//   },
  // subHeading: {
  //   fontSize: 18,
  //   color: red

  // },
  // addButton: {
  //   height: 50,
  //   backgroundColor: 'white',
  //   justifyContent: 'center', 
  //   alignItems: 'center',
  //   margin: 40,
  //   padding: 10,
  //   borderRadius: 4
  // },
  // startButton: {
  //   height: 50,
  //   backgroundColor: 'white',
  //   justifyContent: 'center', 
  //   alignItems: 'center',
  //   marginLeft: 40,
  //   marginRight: 40,
  //   padding: 10,
  //   borderRadius: 4
  // }
// })

    
function mapStateToProps(state) {
  console.log(state)
  return{
    decks: state
  }
}

export default connect(mapStateToProps)(DeckDetails)