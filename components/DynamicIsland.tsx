// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandState } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { motion, Variants } from 'framer-motion'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

const maxWidth = 371
const maxHeight = 160

const handleClick = (state: DynamicIslandState, setState: (state: DynamicIslandState) => void) => {
  const nextState = {
    default: 'compactLeading',
    compactLeading: 'expanded', // skip compactTrailing for now
    compactTrailing: 'expanded',
    expanded: 'xlarge',
    xlarge: 'ultra',
    ultra: 'default',
  }[state.current ?? 'default'] as DynamicIslandState['current']
  setState({ current: nextState })
}

const min = (a: number, b: number) => (a < b ? a : b)

const DynamicIsland = () => {
  const [state, setState] = useState<DynamicIslandState>({ current: 'default' })
  return (
    <motion.div
      className='w-full mx-auto my-6'
      style={{ width: maxWidth, maxWidth: '100%', height: maxHeight, position: 'relative' }}
    >
      <motion.button
        className='flex flex-col items-center justify-center mx-auto text-center text-white transition-shadow duration-300 ease-in-out bg-black hover:shadow-lg'
        whileTap={{ scale: 0.97 }}
        animate={{
          width: min(DynamicIslandSizePresets[state.current ?? initialState].width, maxWidth),
          height:
            DynamicIslandSizePresets[state.current ?? initialState].heightRatio *
            min(DynamicIslandSizePresets[state.current ?? initialState].width, maxWidth),
          borderRadius: DynamicIslandSizePresets[state.current ?? initialState].borderRadius,
          transition: { type: 'spring', stiffness: 200, damping: 24 },
        }}
        onClick={() => handleClick(state, setState)}
      >
        <span className='text-xs font-medium text-center text-white'>{state.current ?? initialState}</span>
      </motion.button>
    </motion.div>
  )
}

export default DynamicIsland
