// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandSize } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { AnimatePresence, motion } from 'framer-motion'
import DynamicIslandDemo from './DynamicIslandDemo'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

const maxWidth = 371
const maxHeight = 160

type Props = {
  changeSizeSequence: DynamicIslandSize[]
  changeSizeOn: 'click' | 'hover'
  handleChange: Function
  id?: string
}

const min = (a: number, b: number) => (a < b ? a : b)

const DynamicIsland = (props: Props) => {
  const [state, setState] = useState<DynamicIslandSize>('default')
  return (
    <div className='grid place-items-center'>
      <motion.button
        id={props.id}
        className='items-center justify-center mx-auto text-center text-white transition duration-300 ease-in-out bg-black hover:shadow-lg'
        animate={{
          width: min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          height:
            DynamicIslandSizePresets[state ?? initialState].heightRatio *
            min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        }}
        onClick={() => props.handleChange(state, setState)}
      >
        <AnimatePresence>
          <DynamicIslandDemo size={state} />
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default DynamicIsland
