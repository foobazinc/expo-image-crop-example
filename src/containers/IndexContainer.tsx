import { StatusBar, StyleSheet, View } from 'react-native'
import { PhotoSelectionButton } from '../components/PhotoSelectionButton'
import React from 'react'
import { AppNavigator } from '../AppNavigator'

export function IndexContainer() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<AppNavigator />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

