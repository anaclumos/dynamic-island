import React from 'react'
import { MotionDiv } from './MotionHtml'
import { motion } from 'framer-motion'
import { DynamicIslandSize } from '../types'
import MusicEqualizerStick from './MusicEqualizerStick'

type Props = {
  size: DynamicIslandSize
  colors: string[]
  before: DynamicIslandSize
}

export const MusicEqualizer = ({ size, colors, before }: Props) => {
  return (
    <MotionDiv className='grid justify-center h-full grid-cols-6 gap-[1px] bg-transparent' size={size} before={before}>
      <MusicEqualizerStick baseLength={50} colors={colors} />
      <MusicEqualizerStick baseLength={60} colors={colors} />
      <MusicEqualizerStick baseLength={90} colors={colors} />
      <MusicEqualizerStick baseLength={100} colors={colors} />
      <MusicEqualizerStick baseLength={90} colors={colors} />
      <MusicEqualizerStick baseLength={60} colors={colors} />
    </MotionDiv>
  )
}
