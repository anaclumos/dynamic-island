import { motion } from 'framer-motion'
import React from 'react'
import { DynamicIslandSize } from '../types'
import DynamicIsland from './DynamicIsland'

type Props = {
  id?: string
  className?: string
  before: DynamicIslandSize
  size: DynamicIslandSize
  children: React.ReactNode
}

const stiffness = 400
const damping = 30

const MotionDiv = (props: Props) => {
  return (
    <motion.div
      id={props.id}
      initial={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        filter: props.size === props.before ? 'blur(10px)' : 'blur(0px)',
        scale: props.size === props.before ? 0.6 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  )
}

const MotionH2 = (props: Props) => {
  return (
    <motion.h2
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.6 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
    >
      {props.children}
    </motion.h2>
  )
}

const MotionP = (props: Props) => {
  return (
    <motion.p
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.6 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
    >
      {props.children}
    </motion.p>
  )
}

export { MotionDiv, MotionH2, MotionP }