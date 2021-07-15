import { useActionSheet } from '@expo/react-native-action-sheet'
import { Button } from 'react-native-elements'
import React from 'react'
import { View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export function PhotoSelectionButton() {
	const { showActionSheetWithOptions } = useActionSheet()
	const options = ['キャンセル', 'フォトライブラリ', '写真を撮る']
	const cancelButtonIndex = 0

	return (
		<View>
			<Button
				title='写真を選択する'
				onPress={() => {
					showActionSheetWithOptions(
						{
							options,
							cancelButtonIndex,
						},
						(buttonIndex) => {
							switch (buttonIndex) {
								case 1: { // フォトライブラリ
									launchImageLibrary(
										{
											mediaType: 'photo',
										},
										({ assets }) => {
											console.log(assets.pop()?.uri || '')
										}
									)
									break;
								}
								default: { // 写真を撮る
									launchCamera(
										{
											mediaType: 'photo',
										},
										({ assets }) => {
											console.log(assets?.pop()?.uri || '')
										}
									)
								}
							}
						})
				}}
			/>
		</View>
	)
}

