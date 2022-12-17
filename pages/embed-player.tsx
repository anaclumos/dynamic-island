import Script from 'next/script'
import React, { useEffect, useRef, useState } from 'react'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandMusicPlayer } from '../src/MusicPlayer'
import Squircle from '../src/Squircle'
import { useIntersection } from '../src/useIntersection'
import { DynamicIslandSize } from '../types'

const Player = () => {
  const [musicPlayerState, setMusicPlayerState] = useState<DynamicIslandSize>('compact')

  const ref = useRef(null)
  const inViewport = useIntersection(ref, '0px')

  useEffect(() => {
    if (inViewport) {
      setTimeout(() => {
        setMusicPlayerState('ultra')
      }, 2000)
    } else {
      setMusicPlayerState('compact')
    }
  }, [inViewport])

  return (
    <div className='py-2 pb-4'>
      <Script src='/static/iframe-resizer.js' />
      <DynamicIsland
        id='music-player'
        default='compact'
        state={musicPlayerState}
        setState={setMusicPlayerState}
        onClick={musicPlayerState === 'compact' ? () => setMusicPlayerState('ultra') : () => setMusicPlayerState('compact')}
      >
        <DynamicIslandMusicPlayer size={musicPlayerState} />
      </DynamicIsland>

      <div className={musicPlayerState === 'compact' ? '' : 'hidden'}>
        <Squircle size='compact' />
      </div>
      <div className={musicPlayerState === 'ultra' ? '' : 'hidden'}>
        <Squircle size='ultra' />
      </div>
    </div>
  )
}

export default Player
