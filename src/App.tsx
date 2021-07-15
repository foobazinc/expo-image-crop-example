import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet'
import React from 'react'
import { IndexContainer } from './containers/IndexContainer'

const ConnectedApp = connectActionSheet(IndexContainer)

export default function App() {
	return (
		<ActionSheetProvider>
			<ConnectedApp />
		</ActionSheetProvider>
	)
}
