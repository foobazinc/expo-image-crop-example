import { StyleSheet, View } from 'react-native'
import { PhotoSelectionButton } from '../components/PhotoSelectionButton'
import React from 'react'

export function IndexContainer() {
	return (
		<View style={styles.container}>
			<PhotoSelectionButton />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

