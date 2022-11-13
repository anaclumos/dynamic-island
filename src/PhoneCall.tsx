import PhoneDownFill from '../public/phone_down_fill.svg'
import PhoneFill from '../public/phone_fill.svg'
import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import { SimpleMotionDiv, SimpleMotionH2, SimpleMotionP } from './MotionHtml'

export const DynamicIslandPhoneCall = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <SimpleMotionDiv className='flex h-full' size={size} before='default'>
      <SimpleMotionDiv className='relative m-auto ml-3 overflow-hidden rounded-full h-3/4 aspect-square' size={size} before='default'>
        <Image src={'https://github.com/anaclumos.png'} alt={"Sunghyun Cho's GitHub Profile Picture"} layout='fill' />
      </SimpleMotionDiv>
      <SimpleMotionDiv className='w-40 pl-2 mt-8 text-left' size={size} before='default'>
        <SimpleMotionP className='mb-0 font-sans text-sm leading-3 text-gray-500' size={size} before='default'>
          mobile
        </SimpleMotionP>
        <SimpleMotionH2 className='mt-0 font-sans text-lg text-white whitespace-nowrap' size={size} before='default'>
          Sunghyun Cho
        </SimpleMotionH2>
      </SimpleMotionDiv>
      <SimpleMotionDiv size={size} before='default' className='relative m-auto ml-0 overflow-hidden bg-red-600 rounded-full h-3/5 aspect-square'>
        <SimpleMotionDiv className='grid m-2.5 h-3/5 aspect-square' size={size} before='default'>
          <PhoneDownFill className='align-middle m-auto text-white scale-[2]' layout='fill' />
        </SimpleMotionDiv>
      </SimpleMotionDiv>
      <SimpleMotionDiv before='default' className='relative m-auto ml-0 overflow-hidden bg-green-600 rounded-full h-3/5 aspect-square' size={size}>
        <SimpleMotionDiv className='grid m-2.5 h-3/5 aspect-square' size={size} before='default'>
          <PhoneFill className='m-auto text-white scale-[2]' layout='fill' />
        </SimpleMotionDiv>
      </SimpleMotionDiv>
    </SimpleMotionDiv>
  )
}
