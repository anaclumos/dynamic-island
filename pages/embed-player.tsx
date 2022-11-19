import Script from 'next/script'
import React, { useState } from 'react'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandMusicPlayer } from '../src/MusicPlayer'
import Squircle from '../src/Squircle'
import { DynamicIslandSize } from '../types'

const Player = () => {
  const [musicPlayerState, setMusicPlayerState] = useState<DynamicIslandSize>('compactBothSides')
  return (
    <div className='py-2'>
      <Script src='/static/iframe-resizer.js' />
      <DynamicIsland
        id='music-player'
        default='compactBothSides'
        state={musicPlayerState}
        setState={setMusicPlayerState}
        onClick={musicPlayerState === 'compactBothSides' ? () => setMusicPlayerState('ultra') : () => setMusicPlayerState('compactBothSides')}
      >
        <DynamicIslandMusicPlayer size={musicPlayerState} />
      </DynamicIsland>
      <div className='hidden'>
        <Squircle size='compactBothSides' />
        <Squircle size='ultra' />
      </div>
    </div>
  )
}

export default Player
