import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  height: number
  width: number
}

export function Mask({ width, height }: Props) {
  return (
    <View style={[styles.container]} pointerEvents='box-none'>
      <View style={styles.maskContainer} pointerEvents='box-none'>
        <View
          style={[styles.maskRow, styles.maskFrame]}
          pointerEvents='box-none'
        />
        <View style={[{ height }, styles.maskCenter]} pointerEvents='box-none'>
          <View style={styles.maskFrame} />
          <View
            style={[styles.maskInner, { width, height }]}
            pointerEvents='box-none'
          />
          <View style={styles.maskFrame} />
        </View>
        <View
          style={[styles.maskRow, styles.maskFrame]}
          pointerEvents='box-none'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  maskContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskFrame: {
    backgroundColor: '#000',
    opacity: 0.6,
    flex: 1,
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {
    display: 'flex',
    flexDirection: 'row',
  },
  maskInner: {
    backgroundColor: 'transparent',
  },
})
