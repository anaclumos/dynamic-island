import React from 'react'
import { MotionDiv } from './MotionHtml'
import { motion } from 'framer-motion'
import { DynamicIslandSize } from '../types'
import MusicEqualizerStick from './MusicEqualizerStick'

type Props = {
  size: DynamicIslandSize
  colors?: string[]
}

const MusicEqualizer = ({ size }: Props) => {
  return (
    <MotionDiv className='grid justify-center h-full grid-cols-6 gap-[0.5px]' size={size} before='compactBothSides'>
      <MusicEqualizerStick baseLength={50} />
      <MusicEqualizerStick baseLength={60} />
      <MusicEqualizerStick baseLength={90} />
      <MusicEqualizerStick baseLength={100} />
      <MusicEqualizerStick baseLength={90} />
      <MusicEqualizerStick baseLength={60} />
    </MotionDiv>
  )
}

export default MusicEqualizer
