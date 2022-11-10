import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import { MotionDiv, MotionH2, MotionP } from './MotionHtml'
import Back from '../public/backward.fill.svg'
import Forward from '../public/forward.fill.svg'
import Pause from '../public/pause.fill.svg'
import AirPods from '../public/airpodspro.svg'
import { NowPlaying } from './Now'
import { useEffect, useState } from 'react'
import { AppleMusicData, AppleMusicSong } from '../types/AppleMusicData'

export const DynamicIslandMusicPlayer = ({ size }: { size: DynamicIslandSize }) => {
  const [song, setSong] = useState<AppleMusicSong[]>()

  const getTimestampInSeconds = () => {
    return Math.floor(Date.now() / 1000)
  }

  const changeEveryNSeconds = 2
  const now = Math.floor((getTimestampInSeconds() / changeEveryNSeconds) % (song?.length ?? 1))

  useEffect(() => {
    const fetchSong = async () => {
      NowPlaying().then((data: AppleMusicData) => {
        setSong(data.data)
      })
    }
    fetchSong().catch(console.error)
  }, [])

  const imageUrl = song?.[now].attributes.artwork.url.replace('{w}', '500').replace('{h}', '500') ?? 'https://cataas.com/c'

  return (
    <MotionDiv className='h-full' size={size} before='compactBothSides'>
      <MotionDiv size={size} before='compactBothSides' className='w-full'>
        <MotionDiv className='flex flex-row h-20 mt-3' size={size} before='compactBothSides'>
          <MotionDiv className='relative w-16 h-16 my-auto ml-6 overflow-hidden rounded-2xl' size={size} before='compactBothSides'>
            <Image src={`/api/imageProxy?imageUrl=${imageUrl}`} alt='A photo of a person listening to music' layout='fill' />
          </MotionDiv>
          <MotionDiv className='my-auto ml-4 mr-6 overflow-hidden text-left' size={size} before='compactBothSides'>
            <MotionP className='mb-0 font-sans text-sm text-gray-500' size={size} before='compactBothSides'>
              Sunghyun&apos;s AirPods Pro
            </MotionP>
            <MotionH2 className='my-0 font-sans text-white truncate text-md whitespace-nowrap' size={size} before='compactBothSides'>
              {song?.[now].attributes.name}
            </MotionH2>
            <MotionP className='mb-0 font-sans text-sm text-gray-500' size={size} before='compactBothSides'>
              {song?.[now].attributes.artistName}
            </MotionP>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv className='grid grid-cols-5 my-2' size={size} before='compactBothSides'>
        <MotionDiv className='block text-left' size={size} before='compactBothSides'>
          <MotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compactBothSides'>
            0:00
          </MotionP>
        </MotionDiv>
        <MotionDiv className='col-span-3 text-right' size={size} before='compactBothSides'>
          <input type='range' className='w-full' disabled={true} />
        </MotionDiv>
        <MotionDiv className='block text-left align-middle' size={size} before='compactBothSides'>
          <MotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compactBothSides'>
            4:33
          </MotionP>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv className='grid grid-cols-5 my-5' size={size} before='compactBothSides'>
        <MotionDiv className='col-span-1 ' size={size} before='compactBothSides' />
        <MotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
          <Back className='m-auto' />
        </MotionDiv>
        <MotionDiv className='col-span-1 my-auto ' size={size} before='compactBothSides'>
          <Pause className='m-auto transform scale-150' />
        </MotionDiv>
        <MotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
          <Forward className='m-auto' />
        </MotionDiv>
        <MotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
          <AirPods className='m-auto' fill='black' />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  )
}
