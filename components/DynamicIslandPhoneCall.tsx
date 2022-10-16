import { DynamicIslandState } from '../types'
import Image from 'next/image'

const DynamicIslandPhoneCall = ({ size, imageUrl, title, description }: DynamicIslandState) => {
  console.log(size)
  if (size === 'default') {
    return <></>
  } else if (size === 'expanded') {
    return (
      <div className='flex flex-row items-center justify-center w-full h-full'>
        <div className='flex flex-col items-center justify-center w-1/2 h-full'>0:00</div>
        <div className='flex flex-col items-center justify-center w-1/2 h-full'>📡</div>
      </div>
    )
  } else if (size === 'xlarge') {
    return (
      <div className='flex'>
        <Image src={imageUrl} width={50} height={50} alt='Profile picture' className='rounded-full' />
        <div>
          <div className='flex flex-row items-center justify-center w-full h-1/4'>{title}</div>
          <div className='flex flex-row items-center justify-center w-full h-1/4'>{description}</div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default DynamicIslandPhoneCall
