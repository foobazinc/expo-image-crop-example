import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Actions } from 'react-native-router-flux'
import ImageCropper from '../../modules/react-native-simple-image-cropper/src'
import { ICropperParams } from 'react-native-simple-image-cropper'

type Props = {
	imageUri: string
}

const width = Dimensions.get('window').width

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
				areaOverlay={<View style={styles.overlay} />}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.text}>スワイプで位置を調整できます</Text>
				<Text style={styles.text}>ピンチイン・アウトでサイズを調整できます</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		height: 200,
		width: width,
		paddingTop: 20,
		paddingLeft: 40,
		backgroundColor: '#333',
		zIndex: 100,
	},
	text: {
		color: 'white',
		marginBottom: 20,
	}
})
