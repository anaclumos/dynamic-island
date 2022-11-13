import { motion } from 'framer-motion'
import React from 'react'
import { DynamicIslandSize } from '../types'
import { useWillChange } from 'framer-motion'
import Image from 'next/image'

type Props = {
  id?: string
  className?: string
  before: DynamicIslandSize
  size: DynamicIslandSize
  children?: React.ReactNode
  src?: string
  alt?: string
}

const stiffness = 400
const damping = 30

// SimpleMotion[Element] is used when the element disappears completely when the size changes.
// We only need to animate the appear/disappearing across two states, not considering different behaviors across two sizes.
export const SimpleMotionDiv = (props: Props) => {
  const willChange = useWillChange()
  return (
    <motion.div
      id={props.id}
      initial={{
        opacity: props.size === props.before ? 1 : 0,
        scale: props.size === props.before ? 1 : 0.8,
        filter: props.size === props.before ? 'none' : 'blur(10px)',
      }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.8 : 1,
        filter: props.size === props.before ? 'blur(10px)' : 'none',
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
      style={{ willChange }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  )
}

// DualMotion[Element] is used when the element changes its size when the DynamicIsland changes, persisting its content.
export const DualStateMotionDiv = (props: Props) => {
  const willChange = useWillChange()
  return (
    <motion.div
      id={props.id}
      animate={{
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      exit={{ opacity: 1, filter: 'blur(10px)', scale: 1 }}
      style={{ willChange }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  )
}

export const DualStateMotionImg = (props: Props) => {
  const willChange = useWillChange()
  return (
    <motion.div
      id={props.id}
      animate={{
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      exit={{ opacity: 1, filter: 'blur(10px)', scale: 1 }}
      style={{ willChange }}
      className={props.className}
    >
      <Image src={props.src ?? 'https://cataas.com/c'} alt={props.alt} layout='fill' />
    </motion.div>
  )
}

export const SimpleMotionH2 = (props: Props) => {
  const willChange = useWillChange()
  return (
    <motion.h2
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.9 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      style={{ willChange }}
    >
      {props.children}
    </motion.h2>
  )
}

export const SimpleMotionP = (props: Props) => {
  const willChange = useWillChange()
  return (
    <motion.p
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.9 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      style={{ willChange }}
    >
      {props.children}
    </motion.p>
  )
}
