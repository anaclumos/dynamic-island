import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandSize } from '../types'
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
          Apple introduced Dynamic Island with iPhone 14 Pro. It is a new way of managing background activities, so I
          wanted to recreate it in web technologies. You can also embed it inside your web today!
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
