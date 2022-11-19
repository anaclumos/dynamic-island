import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import { DynamicIslandSize } from '../types'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandMusicPlayer } from '../src/MusicPlayer'
import { DynamicIslandPhoneCall } from '../src/PhoneCall'
import Squircle from '../src/Squircle'

const Index = () => {
  const [callState, setCallState] = useState<DynamicIslandSize>('default')
  const [musicPlayerState, setMusicPlayerState] = useState<DynamicIslandSize>('compactBothSides')

  return (
    <>
      <div className='w-full h-full py-8 overflow-hiddenring-1 ring-slate-900/5'>
        <Head>
          <title>Dynamic Island on the web</title>
          <meta name='description' content='Dynamic Island on the web' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <h1 className='px-4 py-1 my-6 text-3xl font-bold text-slate-900'>Dynamic Island on the 🕸</h1>
        <p className='px-4 py-1 text-base font-medium text-slate-900'>
          Lorem non dolor quis exercitation cupidatat incididunt ex id sint consectetur magna esse. Anim officia anim ad. Fugiat velit consequat
          tempor dolore veniam labore. Officia reprehenderit amet eu in consequat amet eu elit.
        </p>
      </div>
      <div className='mt-12'>
        <DynamicIsland
          id='phone-call'
          default='default'
          state={callState}
          setState={setCallState}
          onClick={callState === 'default' ? () => setCallState('large') : () => setCallState('default')}
        >
          <DynamicIslandPhoneCall size={callState} />
        </DynamicIsland>
      </div>
      <div className='mt-12'>
        <DynamicIsland
          id='music-player'
          default='compactBothSides'
          state={musicPlayerState}
          setState={setMusicPlayerState}
          onClick={musicPlayerState === 'compactBothSides' ? () => setMusicPlayerState('ultra') : () => setMusicPlayerState('compactBothSides')}
        >
          <DynamicIslandMusicPlayer size={musicPlayerState} />
        </DynamicIsland>
      </div>
      <Squircle size='compactBothSides' />
      <Squircle size='compactLeading' />
      <Squircle size='compactTrailing' />
      <Squircle size='default' />
      <Squircle size='large' />
      <Squircle size='long' />
      <Squircle size='ultra' />
    </>
  )
}

export default Index
