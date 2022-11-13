import React from 'react'
import { DynamicIslandSize } from '../types'
import MusicEqualizerStick from './MusicEqualizerStick'

type Props = {
  size: DynamicIslandSize
  colors: string[]
  before: DynamicIslandSize
}

export const MusicEqualizer = ({ size, colors, before }: Props) => {
  return (
    // we may need to change the sizes
    <div className='grid justify-center h-full grid-cols-6 gap-[0.5px]'>
      <MusicEqualizerStick baseLength={50} colors={colors} />
      <MusicEqualizerStick baseLength={60} colors={colors} />
      <MusicEqualizerStick baseLength={90} colors={colors} />
      <MusicEqualizerStick baseLength={100} colors={colors} />
      <MusicEqualizerStick baseLength={90} colors={colors} />
      <MusicEqualizerStick baseLength={60} colors={colors} />
    </div>
  )
}
