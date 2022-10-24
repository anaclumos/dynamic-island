import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import { DynamicIslandSize } from '../types'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandPhoneCall } from '../src/DynamicIslandDemo'

const Index = () => {
  const [state, setState] = useState<DynamicIslandSize>('default')
  return (
    <>
      <div>
        <Head>
          <title>Dynamic Island on the web</title>
          <meta name='description' content='Dynamic Island on the web' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <h1 className='px-4 py-1 my-6 text-3xl font-bold text-slate-900 dark:text-white'>Dynamic Island on the 🕸</h1>
        <p className='px-4 py-1 text-base font-medium text-slate-900 dark:text-white'>
          Lorem non dolor quis exercitation cupidatat incididunt ex id sint consectetur magna esse. Anim officia anim
          ad. Fugiat velit consequat tempor dolore veniam labore. Officia reprehenderit amet eu in consequat amet eu
          elit.
        </p>
      </div>
      <div className='pt-12'>
        <DynamicIsland
          id='phone-call'
          default='default'
          state={state}
          setState={setState}
          onHover={() => setState('xlarge')}
          onLeave={() => setState('default')}
        >
          <DynamicIslandPhoneCall size={state} />
        </DynamicIsland>
      </div>
    </>
  )
}

export default Index
