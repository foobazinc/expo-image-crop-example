import { useActionSheet } from '@expo/react-native-action-sheet'
import { Button } from 'react-native-elements'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ImagePickerResponse } from 'react-native-image-picker/src/types'

type Props = {
	afterLaunch: (response: ImagePickerResponse) => any
}

export function PhotoSelectionButton({ afterLaunch }: Props) {
	const { showActionSheetWithOptions } = useActionSheet()
	const options = ['キャンセル', 'フォトライブラリ', '写真を撮る']
	const cancelButtonIndex = 0

	return (
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
									afterLaunch
								)
								break;
							}
							default: { // 写真を撮る
								launchCamera(
									{
										mediaType: 'photo',
									},
									afterLaunch
								)
							}
						}
					})
			}}
		/>
	)
}
