import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import phoneDownFill from '../public/phone_down_fill.svg'
import phoneFill from '../public/phone_fill.svg'
import { MotionDiv, MotionH2, MotionP } from './MotionHtml'

const DynamicIslandPhoneCall = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <MotionDiv className='flex h-full' size={size}>
      <MotionDiv className='relative m-auto ml-3 overflow-hidden rounded-full h-3/4 aspect-square' size={size}>
        <Image src={'https://github.com/anaclumos.png'} alt={"Sunghyun Cho's GitHub Profile Picture"} layout='fill' />
      </MotionDiv>
      <MotionDiv className='w-40 pl-2 mt-8 text-left' size={size}>
        <MotionP className='mb-0 font-sans leading-3 text-gray-500' size={size}>
          mobile
        </MotionP>
        <MotionH2 className='mt-0 font-sans text-xl text-white whitespace-nowrap' size={size}>
          Sunghyun Cho
        </MotionH2>
      </MotionDiv>
      <MotionDiv
        size={size}
        className='relative m-auto ml-0 overflow-hidden bg-red-600 rounded-full h-3/5 aspect-square'
      >
        <MotionDiv className='relative m-2.5 h-3/5 aspect-square' size={size}>
          <Image src={phoneDownFill} alt='Decline Call' layout='fill' />
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        className='relative m-auto ml-0 overflow-hidden bg-green-600 rounded-full h-3/5 aspect-square'
        size={size}
      >
        <MotionDiv className='relative m-2.5 h-3/5 aspect-square' size={size}>
          <Image src={phoneFill} layout='fill' alt='Accept Call' />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  )
}

export { DynamicIslandPhoneCall }
