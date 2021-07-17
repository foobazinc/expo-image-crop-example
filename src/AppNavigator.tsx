import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import { Detail } from './screens/Detail'
import { Preview } from './screens/Preview'
import React from 'react'

export function AppNavigator() {
	return (
		<Router>
			<Stack key='root'>
				<Scene
					key='detail'
					component={Detail}
					title='詳細'
				/>
				<Scene
					key='preview'
					component={Preview}
					title='プレビュー'
					back={true}
				/>
			</Stack>
		</Router>
	)
}
