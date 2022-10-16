// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities

import { useState } from 'react'
import { DynamicIslandState } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'

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

const DynamicIsland = () => {
  const [state, setState] = useState<DynamicIslandState>({ current: 'default' })
  return (
    <div
      className='mx-auto my-6 w-full'
      style={{ width: maxWidth, maxWidth: '100%', height: maxHeight, position: 'relative' }}
    >
      <button
        className='flex flex-col items-center justify-center mx-auto text-center bg-black text-white hover:shadow-lg transition-shadow duration-300 ease-in-out'
        style={{
          width: (DynamicIslandSizePresets[state.current ?? initialState].width / maxWidth) * 100 + '%',
          height: (DynamicIslandSizePresets[state.current ?? initialState].height / maxHeight) * 100 + '%',
          borderRadius: DynamicIslandSizePresets[state.current ?? initialState].borderRadius,
        }}
        onClick={() => handleClick(state, setState)}
      >
        <span className='text-xs font-medium text-center text-white'>{state.current ?? initialState}</span>
      </button>
    </div>
  )
}

export default DynamicIsland
