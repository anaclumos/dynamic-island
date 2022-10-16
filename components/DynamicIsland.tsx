// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandSize, DynamicIslandState } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { motion } from 'framer-motion'
import DynamicIslandPhoneCall from './DynamicIslandPhoneCall'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

const maxWidth = 371
const maxHeight = 160

const sequence: DynamicIslandSize[] = ['default', 'expanded', 'default', 'xlarge', 'default', 'ultra']
let sequenceIndex = 0

const handleClick = (state: DynamicIslandSize, setState: (state: DynamicIslandSize) => void) => {
  const nextState = sequence[sequenceIndex++ % sequence.length]
  setState(nextState)
}

const min = (a: number, b: number) => (a < b ? a : b)

const DynamicIsland = (props: DynamicIslandState) => {
  const [state, setState] = useState<DynamicIslandSize>('default')
  return (
    <motion.div
      className='w-full mx-auto my-6'
      style={{ width: maxWidth, maxWidth: '100%', height: maxHeight, position: 'relative' }}
    >
      <motion.button
        className='flex flex-col items-center justify-center mx-auto text-center text-white transition-shadow duration-300 ease-in-out bg-black hover:shadow-lg'
        whileTap={{ scale: 0.97 }}
        animate={{
          width: min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          height:
            DynamicIslandSizePresets[state ?? initialState].heightRatio *
            min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
          transition: { type: 'spring', stiffness: 240, damping: 24 },
        }}
        onClick={() => handleClick(state, setState)}
      >
        <DynamicIslandPhoneCall {...(props as DynamicIslandState)} size={state} />
      </motion.button>
    </motion.div>
  )
}

export default DynamicIsland
