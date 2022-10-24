import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import phoneDownFill from '../public/phone_down_fill.svg'
import phoneFill from '../public/phone_fill.svg'
import { MotionDiv, MotionH2, MotionP } from './MotionHtml'

const DynamicIslandPhoneCall = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <MotionDiv className='flex h-full' size={size} before='default'>
      <MotionDiv
        className='relative m-auto ml-3 overflow-hidden rounded-full h-3/4 aspect-square'
        size={size}
        before='default'
      >
        <Image src={'https://github.com/anaclumos.png'} alt={"Sunghyun Cho's GitHub Profile Picture"} layout='fill' />
      </MotionDiv>
      <MotionDiv className='w-40 pl-2 mt-8 text-left' size={size} before='default'>
        <MotionP className='mb-0 font-sans leading-3 text-gray-500' size={size} before='default'>
          mobile
        </MotionP>
        <MotionH2 className='mt-0 font-sans text-xl text-white whitespace-nowrap' size={size} before='default'>
          Sunghyun Cho
        </MotionH2>
      </MotionDiv>
      <MotionDiv
        size={size}
        before='default'
        className='relative m-auto ml-0 overflow-hidden bg-red-600 rounded-full h-3/5 aspect-square'
      >
        <MotionDiv className='relative m-2.5 h-3/5 aspect-square' size={size} before='default'>
          <Image src={phoneDownFill} alt='Decline Call' layout='fill' />
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        before='default'
        className='relative m-auto ml-0 overflow-hidden bg-green-600 rounded-full h-3/5 aspect-square'
        size={size}
      >
        <MotionDiv className='relative m-2.5 h-3/5 aspect-square' size={size} before='default'>
          <Image src={phoneFill} layout='fill' alt='Accept Call' />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  )
}

const DynamicIslandMusicPlayer = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <MotionDiv className='h-full' size={size} before='compactBothSides'>
      <MotionDiv size={size} before='compactBothSides' className='w-full'>
        <MotionDiv className='flex flex-row ' size={size} before='compactBothSides'>
          <MotionDiv
            className='relative w-20 h-20 mt-5 ml-5 overflow-hidden rounded-2xl'
            size={size}
            before='compactBothSides'
          >
            <Image src={'https://cataas.com/c'} alt='A photo of a person listening to music' layout='fill' />
          </MotionDiv>
          <MotionDiv className='w-20 mt-10 ml-4 text-left' size={size} before='compactBothSides'>
            <MotionP className='mb-0 font-sans leading-3 text-gray-500' size={size} before='compactBothSides'>
              music
            </MotionP>
            <MotionH2
              className='mt-0 font-sans text-xl text-white whitespace-nowrap'
              size={size}
              before='compactBothSides'
            >
              Blinding Lights
            </MotionH2>
          </MotionDiv>
        </MotionDiv>
        {/* current playtime, scrubber, total tiem */}
      </MotionDiv>
      <MotionDiv className='flex flex-row ' size={size} before='compactBothSides'>
        <MotionDiv className='w-20 text-left' size={size} before='compactBothSides'>
          <MotionP className='mb-0 font-sans leading-3 text-gray-500' size={size} before='compactBothSides'>
            0:00
          </MotionP>
        </MotionDiv>
        <MotionDiv className='w-20 text-left' size={size} before='compactBothSides'>
          <MotionP className='mb-0 font-sans leading-3 text-gray-500' size={size} before='compactBothSides'>
            3:33
          </MotionP>
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  )
}

export { DynamicIslandPhoneCall, DynamicIslandMusicPlayer }
