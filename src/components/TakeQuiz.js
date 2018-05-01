import React from 'react'
import { Text, StyleSheet } from 'react-native'


export default function TakeQuiz() {
  return (
    <Text>TAKE QUIZ</Text>
  )
}



style = StyleSheet.create({
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