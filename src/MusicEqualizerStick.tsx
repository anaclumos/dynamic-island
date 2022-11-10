import { motion } from 'framer-motion'
import React from 'react'

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const getLoopingRandomInt = (max: number, length: number, base: number) => {
  const randomInts = []
  for (let i = 0; i < length - 1; i++) {
    randomInts.push((getRandomInt(max) - max) / 2 + (base / 100) * max)
  }
  randomInts.push(randomInts[0])
  return randomInts
}

type Props = {
  baseLength?: number // as a percentage of the height of the parent
}

const MusicEqualizerStick = ({ baseLength }: Props) => {
  return (
    <motion.div
      className='w-0.5 h-6 col-span-1 my-auto mx-auto bg-gray-500 rounded-full'
      animate={{
        height: getLoopingRandomInt(32, 6, baseLength ?? 50),
      }}
      transition={{
        duration: 1.1,
        ease: 'easeInOut',
        times: [0.2, 0.3, 0.5, 0.7, 1.1, 1.3, 1.7],
        repeat: Infinity,
      }}
    />
  )
}

export default MusicEqualizerStick
