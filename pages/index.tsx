import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import DynamicIsland from '../components/DynamicIsland'
import { DynamicIslandSize, DynamicIslandState } from '../types'

const Index = () => {
  const imageUrl = 'https://github.com/anaclumos.png'
  const sequence: DynamicIslandSize[] = ['xlarge', 'default']
  let sequenceIndex = 0

  const handleClick = (state: DynamicIslandSize, setState: (state: DynamicIslandSize) => void) => {
    const nextState = sequence[sequenceIndex++ % sequence.length]
    setState(nextState)
  }

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
        <DynamicIsland changeSizeSequence={sequence} changeSizeOn='click' handleChange={handleClick} id='phone-call' />
      </div>
    </>
  )
}

export default Index
