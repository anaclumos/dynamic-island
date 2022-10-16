import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import DynamicIsland from '../components/DynamicIsland'
import { DynamicIslandSize, DynamicIslandState } from '../types'

const Index = () => {
  const imageUrl = 'https://github.com/anaclumos.png'
  const [diState, setDiState] = useState<DynamicIslandState>({
    size: 'default' as DynamicIslandSize,
    imageUrl: imageUrl,
    title: 'Title',
    description: 'Description',
  })
  return (
    <>
      <div className='px-4'>
        <Head>
          <title>Dynamic Island on the web</title>
          <meta name='description' content='Dynamic Island on the web' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <h1 className='py-1 my-6 text-3xl font-bold text-slate-900 dark:text-white'>Dynamic Island on the 🕸</h1>
        <p className='py-1 text-base font-medium text-slate-900 dark:text-white'>
          Lorem non dolor quis exercitation cupidatat incididunt ex id sint consectetur magna esse. Anim officia anim
          ad. Fugiat velit consequat tempor dolore veniam labore. Officia reprehenderit amet eu in consequat amet eu
          elit.
        </p>
      </div>
      <DynamicIsland {...diState} />
    </>
  )
}

export default Index
