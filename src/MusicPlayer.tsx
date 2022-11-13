import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import { DualStateMotionDiv, DualStateMotionImg, SimpleMotionDiv, SimpleMotionH2, SimpleMotionP } from './MotionHtml'
import Back from '../public/backward.fill.svg'
import Forward from '../public/forward.fill.svg'
import Pause from '../public/pause.fill.svg'
import AirPods from '../public/airpodspro.svg'
import { NowPlaying } from './Now'
import { useEffect, useState } from 'react'
import { AppleMusicData, AppleMusicSong } from '../types/AppleMusicData'
import { MusicEqualizer } from './MusicEqualizer'

export const DynamicIslandMusicPlayer = ({ size }: { size: DynamicIslandSize }) => {
  const [song, setSong] = useState<AppleMusicSong[]>()

  const getTimestampInSeconds = () => {
    return Math.floor(Date.now() / 1000)
  }

  const changeEveryNSeconds = 10
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
  const musicColors = [
    song?.[now].attributes.artwork.bgColor ?? '#eee',
    song?.[now].attributes.artwork.textColor1 ?? '#eee',
    song?.[now].attributes.artwork.textColor2 ?? '#eee',
    song?.[now].attributes.artwork.textColor3 ?? '#eee',
    song?.[now].attributes.artwork.textColor4 ?? '#eee',
  ]

  {
    /* <MotionDiv className='grid justify-center h-full grid-cols-6 ml-1.5' size={size} before='ultra'>
  <MotionDiv className='relative col-span-1 mx-auto my-auto overflow-hidden rounded-lg w-7 h-7' size={size} before='ultra'>
    <Image src={`/api/imageProxy?imageUrl=${imageUrl}`} alt='A photo of a person listening to music' layout='fill' />
  </MotionDiv>
  <MotionDiv className='col-span-4 mx-auto my-auto' size={size} before='ultra' />
  <MotionDiv className='w-6 col-span-1 mx-auto my-auto' size={size} before='ultra'>
    <MusicEqualizer size={size} colors={musicColors} before='ultra' />
  </MotionDiv>
</MotionDiv> */
  }

  return (
    <div className='h-full'>
      <DualStateMotionDiv className='h-full' size={size} before='compactBothSides'>
        <DualStateMotionDiv
          size={size}
          before='compactBothSides'
          className={`w-full
        ${size === 'ultra' ? '' : 'h-full'}
        `}
        >
          <DualStateMotionDiv
            className={`grid grid-cols-5 
            ${size === 'ultra' ? 'my-6' : 'my-0 h-full'}
          `}
            size={size}
            before='compactBothSides'
          >
            <DualStateMotionDiv
              className={`relative col-span-1 mx-auto my-auto overflow-hidden ${
                size == 'ultra' ? 'w-16 h-16 rounded-2xl' : 'w-7 h-7 rounded-lg'
              } ml-6 overflow-hidden `}
              size={size}
              before='compactBothSides'
            >
              <DualStateMotionImg
                src={`/api/imageProxy?imageUrl=${imageUrl}`}
                alt='A photo of a person listening to music'
                size={size}
                before='compactBothSides'
                className={`relative col-span-1 my-auto overflow-hidden ${size == 'ultra' ? 'w-16 h-16 rounded-2xl' : 'w-7 h-7 rounded-lg'}`}
              />
            </DualStateMotionDiv>
            <SimpleMotionDiv className={`col-span-3 my-auto ml-6 overflow-hidden text-left`} size={size} before='compactBothSides'>
              <SimpleMotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compactBothSides'>
                Sunghyun&apos;s AirPods Pro
              </SimpleMotionP>
              <SimpleMotionH2 className='my-0 font-sans text-white truncate text-md whitespace-nowrap' size={size} before='compactBothSides'>
                {song?.[now].attributes.name}
              </SimpleMotionH2>
              <SimpleMotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compactBothSides'>
                {song?.[now].attributes.artistName}
              </SimpleMotionP>
            </SimpleMotionDiv>
            <div className='flex flex-row justify-end'>
              <div className='relative w-8 h-8 my-auto mr-6 overflow-hidden'>
                <MusicEqualizer size={size} colors={musicColors} before='compactBothSides' />
              </div>
            </div>
          </DualStateMotionDiv>
        </DualStateMotionDiv>
        <SimpleMotionDiv className='grid grid-cols-5 my-2' size={size} before='compactBothSides'>
          <SimpleMotionDiv className='block text-left' size={size} before='compactBothSides'>
            <SimpleMotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compactBothSides'>
              0:00
            </SimpleMotionP>
          </SimpleMotionDiv>
          <SimpleMotionDiv className='col-span-3 my-auto' size={size} before='compactBothSides'>
            <div className='relative w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500 rounded-full'>
              <div className='absolute w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500' />
              <div className='absolute w-24 h-2 my-auto mr-6 overflow-hidden bg-white' />
            </div>
          </SimpleMotionDiv>
          <SimpleMotionDiv className='block text-left align-middle' size={size} before='compactBothSides'>
            <SimpleMotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compactBothSides'>
              4:33
            </SimpleMotionP>
          </SimpleMotionDiv>
        </SimpleMotionDiv>
        <SimpleMotionDiv className='grid grid-cols-5 my-5' size={size} before='compactBothSides'>
          <SimpleMotionDiv className='col-span-1 ' size={size} before='compactBothSides' />
          <SimpleMotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
            <Back className='m-auto' />
          </SimpleMotionDiv>
          <SimpleMotionDiv className='col-span-1 my-auto ' size={size} before='compactBothSides'>
            <Pause className='m-auto transform scale-150' />
          </SimpleMotionDiv>
          <SimpleMotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
            <Forward className='m-auto' />
          </SimpleMotionDiv>
          <SimpleMotionDiv className='col-span-1 my-auto' size={size} before='compactBothSides'>
            <AirPods className='m-auto' fill='black' />
          </SimpleMotionDiv>
        </SimpleMotionDiv>
      </DualStateMotionDiv>
    </div>
  )
}
