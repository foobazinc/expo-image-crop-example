import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Actions } from 'react-native-router-flux'
import ImageCropper from '../../modules/react-native-simple-image-cropper/src'
import { ICropperParams } from 'react-native-simple-image-cropper'

type Props = {
	imageUri: string
}

export function Preview({ imageUri }: Props) {
	const [cropperParams, setCropperParams] = useState<ICropperParams>()

	const cropImage = async () => {
		const cropSize = {
			width: 300,
			height: 150,
		}

		const cropAreaSize = {
			width: 300,
			height: 150,
		}

		try {
			const croppedImageUri = await ImageCropper.crop({
				...cropperParams,
				imageUri,
				cropSize,
				cropAreaSize,
			})

			Actions.detail({ imageUri: croppedImageUri })
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		Actions.refresh({
			rightTitle: '完了',
			onRight: cropImage
		})
	}, [cropperParams])

	return (
		<View style={styles.container}>
			<ImageCropper
				setCropperParams={setCropperParams}
				imageUri={imageUri}
				cropAreaHeight={150}
				cropAreaWidth={300}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
