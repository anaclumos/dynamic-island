import { motion } from 'framer-motion'
import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import phoneDownFill from '../public/phone_down_fill.svg'
import phoneFill from '../public/phone_fill.svg'

const imageUrl = 'https://github.com/anaclumos.png'
const title = 'Hello World!'

const DynamicIslandPhoneCall = ({ size }: { size: DynamicIslandSize }) => {
  if (size === 'default') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
        Default
      </motion.div>
    )
  } else if (size === 'expanded') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
        Expanded
      </motion.div>
    )
  } else if (size === 'xlarge') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} className='flex '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className='mt-1 ml-3 rounded-full'
        >
          <Image src={imageUrl} className='rounded-full' width={63} height={63} alt={title} />
        </motion.div>
        <motion.div
          className='flex flex-col my-auto mt-4 ml-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.p
            className='text-sm text-left text-gray-600 '
            initial={{ size: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            mobile
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className='mt-0 text-lg whitespace-nowrap'
          >
            Sunghyun Cho
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className='my-auto bg-red-600 rounded-full ml-11'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className='flex items-center justify-center mx-2 my-2 rounded-full'
          >
            <Image src={phoneDownFill} width={30} height={30} alt={title} />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className='my-auto ml-2 bg-green-600 rounded-full'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className='flex items-center justify-center mx-2 my-2 rounded-full'
          >
            <Image src={phoneFill} width={30} height={30} alt={title} />
          </motion.div>
        </motion.div>
      </motion.div>
    )
  } else if (size === 'ultra') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
        ultra
      </motion.div>
    )
  } else {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
        Small
      </motion.div>
    )
  }
}

export default DynamicIslandPhoneCall
