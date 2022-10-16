// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandState } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

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

const DynamicIsland = () => {
  const [state, setState] = useState<DynamicIslandState>({ current: 'default' })

  return (
    <div>
      <button
        className='flex flex-col items-center justify-center mx-auto my-6 text-center bg-black text-white rounded-full hover:shadow-lg transition-shadow duration-300 ease-in-out'
        style={{
          width: DynamicIslandSizePresets[state.current ?? initialState].width,
          height: DynamicIslandSizePresets[state.current ?? initialState].height,
        }}
        onClick={() => handleClick(state, setState)}
      ></button>
    </div>
  )
}

export default DynamicIsland
