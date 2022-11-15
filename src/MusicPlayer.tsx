import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import { MotionDiv, MotionH2, MotionP } from './MotionHtml'
import Back from '../public/backward.fill.svg'
import Forward from '../public/forward.fill.svg'
import Pause from '../public/pause.fill.svg'
import AirPods from '../public/airpodspro.svg'
import { NowPlaying } from './Now'
import { useEffect, useMemo, useState } from 'react'
import { AppleMusicData, AppleMusicSong } from '../types/AppleMusicData'
import { MusicEqualizer } from './MusicEqualizer'

export const DynamicIslandMusicPlayer = ({ size }: { size: DynamicIslandSize }) => {
  const [song, setSong] = useState<AppleMusicSong[]>()
  const [placeholder, setPlaceholder] = useState(
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill='${'#eee'}'/%3E%3C/svg%3E`
  )

  const getTimestampInSeconds = () => {
    return Math.floor(Date.now() / 1000)
  }

  const changeEveryNSeconds = 60
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

  let musicColors = useMemo(() => {
    return [
      song?.[now].attributes.artwork.bgColor ?? '#eee',
      song?.[now].attributes.artwork.textColor1 ?? '#eee',
      song?.[now].attributes.artwork.textColor2 ?? '#eee',
      song?.[now].attributes.artwork.textColor3 ?? '#eee',
      song?.[now].attributes.artwork.textColor4 ?? '#eee',
    ]
  }, [now, song])

  const r = parseInt(musicColors[0].substring(0, 2), 16) + 64
  const g = parseInt(musicColors[0].substring(2, 4), 16) + 64
  const b = parseInt(musicColors[0].substring(4, 6), 16) + 64
  const rgb = `rgb(${r}, ${g}, ${b})`

  useEffect(() => {
    setPlaceholder(
      `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill='${
        musicColors[0] ?? '#eee'
      }'/%3E%3C/svg%3E`
    )
  }, [musicColors])

  return (
    <>
      <div style={size === 'ultra' ? { display: 'none' } : { display: 'block' }} className='h-full'>
        <MotionDiv className='grid justify-center h-full grid-cols-6 ml-1.5' size={size} before='ultra'>
          <MotionDiv className='relative col-span-1 mx-auto my-auto overflow-hidden rounded-lg w-7 h-7' size={size} before='ultra'>
            <Image
              src={`/api/imageProxy?imageUrl=${imageUrl}`}
              alt={`album art of song`}
              layout='fill'
              blurDataURL={placeholder}
              placeholder='blur'
            />
          </MotionDiv>
          <MotionDiv className='col-span-4 mx-auto my-auto' size={size} before='ultra' />
          <MotionDiv className='w-6 col-span-1 mx-auto my-auto pr-0.5' size={size} before='ultra'>
            <MusicEqualizer size={size} colors={musicColors} before='ultra' />
          </MotionDiv>
        </MotionDiv>
      </div>
      <div style={size === 'compactBothSides' ? { display: 'none' } : { display: 'block' }} className='h-full'>
        <MotionDiv className='h-full' size={size} before='compactBothSides'>
          <MotionDiv size={size} before='compactBothSides' className='w-full'>
            <MotionDiv className='grid grid-cols-5 my-6' size={size} before='compactBothSides'>
              <MotionDiv className='relative w-16 h-16 col-span-1 my-auto ml-6 overflow-hidden rounded-2xl' size={size} before='compactBothSides'>
                <Image
                  src={`/api/imageProxy?imageUrl=${imageUrl}`}
                  alt={`album art of song`}
                  layout='fill'
                  blurDataURL={placeholder}
                  placeholder='blur'
                />
              </MotionDiv>
              <MotionDiv className='col-span-3 my-auto ml-6 overflow-hidden text-left' size={size} before='compactBothSides'>
                <MotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compactBothSides'>
                  Sunghyun&apos;s AirPods Pro
                </MotionP>
                <MotionH2 className='my-0 font-sans text-white truncate text-md whitespace-nowrap' size={size} before='compactBothSides'>
                  {song?.[now].attributes.name}
                </MotionH2>
                <MotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compactBothSides'>
                  {song?.[now].attributes.artistName}
                </MotionP>
              </MotionDiv>
              <div className='flex flex-row justify-end'>
                <div className='relative w-8 h-8 my-auto mr-6 overflow-hidden'>
                  <MusicEqualizer size={size} colors={musicColors} before='compactBothSides' />
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv className='grid grid-cols-5 my-2' size={size} before='compactBothSides'>
            <MotionDiv className='block text-left' size={size} before='compactBothSides'>
              <MotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compactBothSides'>
                0:00
              </MotionP>
            </MotionDiv>
            <MotionDiv className='col-span-3 my-auto' size={size} before='compactBothSides'>
              <div className='relative w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500 rounded-full'>
                <div className='absolute w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500' />
                <div className='absolute w-24 h-2 my-auto mr-6 overflow-hidden bg-white' />
              </div>
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
      </div>
    </>
  )
}
