// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandSize } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { AnimatePresence, motion } from 'framer-motion'
import DynamicIslandDemo from './DynamicIslandDemo'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

const maxWidth = 371
const maxHeight = 160

const sequence: DynamicIslandSize[] = ['expanded', 'default', 'xlarge', 'default', 'ultra']
let sequenceIndex = 0

const handleClick = (state: DynamicIslandSize, setState: (state: DynamicIslandSize) => void) => {
  const nextState = sequence[sequenceIndex++ % sequence.length]
  setState(nextState)
}

type Props = {
  changeSizeSequence: DynamicIslandSize[]
  changeSizeOn: 'click ' | 'hover'
}

const min = (a: number, b: number) => (a < b ? a : b)

const DynamicIsland = (props: Props) => {
  const [state, setState] = useState<DynamicIslandSize>('default')

  return (
    <div className='grid place-items-center'>
      <motion.div>
        <motion.button
          className='items-center justify-center mx-auto text-center text-white transition duration-300 ease-in-out bg-black hover:shadow-lg'
          animate={{
            width: min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
            height:
              DynamicIslandSizePresets[state ?? initialState].heightRatio *
              min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
            borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
            transition: { type: 'spring', stiffness: 240, damping: 30 },
          }}
          onClick={() => handleClick(state, setState)}
        >
          <AnimatePresence>
            <DynamicIslandDemo size={state} />
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default DynamicIsland
