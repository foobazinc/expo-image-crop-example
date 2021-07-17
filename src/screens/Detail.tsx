import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { PhotoSelectionButton } from '../components/PhotoSelectionButton'
import { Actions } from 'react-native-router-flux'

type Props = {
	imageUri?: string
}

export function Detail({ imageUri }: Props) {
	return (
		<View style={styles.container}>
			{imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
			<PhotoSelectionButton afterLaunch={({ assets }) => {
				const imageUri = assets?.[0]?.uri || ''

				if (!imageUri) {
					return
				}

				Actions.preview({ imageUri })
			}} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 300,
		height: 150,
		marginBottom: 20,
	}
})
