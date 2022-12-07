import { DynamicIslandSize } from '../types'
import Image, { StaticImageData } from 'next/image'
import { MotionDiv, MotionH2, MotionP } from './MotionHtml'
import Back from '../public/backward.fill.svg'
import Forward from '../public/forward.fill.svg'
import Pause from '../public/pause.fill.svg'
import AirPods from '../public/airpodspro.svg'
import { NowPlaying } from './Now'
import { useEffect, useMemo, useState } from 'react'
import { AppleMusicData, AppleMusicSong } from '../types/AppleMusicData'
import { MusicEqualizer } from './MusicEqualizer'
import emptyAlbumCover from '../public/empty.png'
import { getEmptyAlbumCover } from './emptyAlbumCover'
import Head from 'next/head'

export const hasNoImageUrl = (songUrl: string | StaticImageData) => {
  return !(typeof songUrl === 'string')
}

export const DynamicIslandMusicPlayer = ({ size }: { size: DynamicIslandSize }) => {
  const [song, setSong] = useState<AppleMusicSong[]>()

  const [now, setNow] = useState<number>(0)
  const currentSong = useMemo(() => song?.[now] ?? null, [song, now])

  useEffect(() => {
    const fetchSong = async () => {
      NowPlaying().then((data: AppleMusicData) => {
        setSong(data.data)
      })
    }
    fetchSong().catch(console.error)
  }, [])

  const imageUrl = currentSong?.attributes?.artwork?.url?.replace('{w}', '500').replace('{h}', '500') ?? emptyAlbumCover
  const allImageUrl = song?.map((song) => song.attributes?.artwork?.url?.replace('{w}', '500').replace('{h}', '500') ?? emptyAlbumCover)
  const blurUrl = getEmptyAlbumCover()

  const decrement = () => {
    if (now === 0) {
      setNow((song?.length ?? 1) - 1)
    } else {
      setNow(now - 1)
    }
  }

  const increment = () => {
    if (now === (song?.length ?? 1) - 1) {
      setNow(0)
    } else {
      setNow(now + 1)
    }
  }

  let musicColors = useMemo(() => {
    return [
      currentSong?.attributes?.artwork?.bgColor ?? 'eeeeee',
      currentSong?.attributes?.artwork?.textColor1 ?? 'eeeeee',
      currentSong?.attributes?.artwork?.textColor2 ?? 'eeeeee',
      currentSong?.attributes?.artwork?.textColor3 ?? 'eeeeee',
      currentSong?.attributes?.artwork?.textColor4 ?? 'eeeeee',
    ]
  }, [
    currentSong?.attributes?.artwork?.bgColor,
    currentSong?.attributes?.artwork?.textColor1,
    currentSong?.attributes?.artwork?.textColor2,
    currentSong?.attributes?.artwork?.textColor3,
    currentSong?.attributes?.artwork?.textColor4,
  ])

  return (
    <>
      <Head>
        {allImageUrl?.map((imageUrl) => {
          return (
            <>
              <link key={imageUrl} rel='preload' href={`/api/imageProxy?imageUrl=${encodeURIComponent(imageUrl)}`} as='image' />
              <link key={imageUrl} rel='preload' href={encodeURIComponent(imageUrl)} as='image' />
            </>
          )
        })}
      </Head>
      <div style={size === 'ultra' ? { display: 'none' } : { display: 'block' }} className='h-full'>
        <MotionDiv className='grid justify-center h-full grid-cols-6 ml-1.5' size={size} before='ultra'>
          <MotionDiv className='relative col-span-1 mx-auto my-auto overflow-hidden rounded-lg w-7 h-7' size={size} before='ultra'>
            {hasNoImageUrl(imageUrl) ? (
              <Image src={imageUrl} alt='Album Art' layout='fill' objectFit='cover' />
            ) : (
              <Image src={`/api/imageProxy?imageUrl=${imageUrl}`} alt={`album art of song`} layout='fill' placeholder='blur' blurDataURL={blurUrl} />
            )}
          </MotionDiv>
          <MotionDiv className='col-span-4 mx-auto my-auto' size={size} before='ultra' />
          <MotionDiv className='w-7.5 col-span-1 mx-auto my-auto pr-0.5' size={size} before='ultra'>
            <MusicEqualizer size={size} colors={musicColors} before='ultra' />
          </MotionDiv>
        </MotionDiv>
      </div>
      <div style={size === 'compact' ? { display: 'none' } : { display: 'block' }} className='h-full'>
        <MotionDiv className='h-full' size={size} before='compact'>
          <MotionDiv size={size} before='compact' className='w-full'>
            <MotionDiv className='grid grid-cols-5 my-6' size={size} before='compact'>
              <MotionDiv className='relative w-16 h-16 col-span-1 my-auto ml-6 overflow-hidden rounded-2xl' size={size} before='compact'>
                {hasNoImageUrl(imageUrl) ? (
                  <Image src={imageUrl} alt='Album Art' layout='fill' objectFit='cover' />
                ) : (
                  <Image
                    src={`/api/imageProxy?imageUrl=${imageUrl}`}
                    alt={`album art of song`}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL={blurUrl}
                  />
                )}
              </MotionDiv>
              <MotionDiv className='col-span-3 my-auto ml-6 overflow-hidden text-left' size={size} before='compact'>
                <MotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compact'>
                  Sunghyun was listening to&hellip;
                </MotionP>
                <MotionH2 className='my-0 font-sans text-white truncate text-md whitespace-nowrap' size={size} before='compact'>
                  {currentSong?.attributes.name ?? 'Nothing'}
                </MotionH2>
                <MotionP className='mb-0 font-sans text-sm text-gray-500 truncate' size={size} before='compact'>
                  by {currentSong?.attributes.artistName ?? 'Nobody'}
                </MotionP>
              </MotionDiv>
              <div className='flex flex-row justify-end'>
                <div className='relative my-auto mr-6 overflow-hidden scale-125'>
                  <MusicEqualizer size={size} colors={musicColors} before='compact' />
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv className='grid grid-cols-5 my-2' size={size} before='compact'>
            <MotionDiv className='block text-left' size={size} before='compact'>
              <MotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compact'>
                0:00
              </MotionP>
            </MotionDiv>
            <MotionDiv className='col-span-3 my-auto' size={size} before='compact'>
              <div className='relative w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500 rounded-full'>
                <div className='absolute w-full h-2 my-auto mr-6 overflow-hidden bg-gray-500' />
                <div className='absolute w-24 h-2 my-auto mr-6 overflow-hidden bg-white' />
              </div>
            </MotionDiv>
            <MotionDiv className='block text-left align-middle' size={size} before='compact'>
              <MotionP className='m-auto font-sans text-sm text-center text-gray-500 align-middle' size={size} before='compact'>
                4:33
              </MotionP>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv className='grid grid-cols-5 my-5' size={size} before='compact'>
            <MotionDiv className='col-span-1 ' size={size} before='compact' />
            <MotionDiv className='col-span-1 my-auto' size={size} before='compact'>
              <Back
                className='m-auto'
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  decrement()
                  e.preventDefault()
                  e.stopPropagation()
                  return false
                }}
              />
            </MotionDiv>
            <MotionDiv className='col-span-1 my-auto ' size={size} before='compact'>
              <Pause className='m-auto transform scale-150' />
            </MotionDiv>
            <MotionDiv className='col-span-1 my-auto' size={size} before='compact'>
              <Forward
                className='m-auto'
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  increment()
                  e.preventDefault()
                  e.stopPropagation()
                  return false
                }}
              />
            </MotionDiv>
            <MotionDiv className='col-span-1 my-auto' size={size} before='compact'>
              <AirPods className='m-auto' fill='black' />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
    </>
  )
}
