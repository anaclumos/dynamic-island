import { motion } from 'framer-motion'
import { DynamicIslandSize } from '../types'
import Image from 'next/image'
import phoneDownFill from '../public/phone_down_fill.svg'
import phoneFill from '../public/phone_fill.svg'

const imageUrl = 'https://github.com/anaclumos.png'
const title = 'Hello World!'

const DynamicIslandPhoneCall = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <motion.div style={{ position: 'relative', height: '100%', display: 'flex' }}>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
        animate={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        exit={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
        style={{
          position: 'relative',
          height: '70%',
          aspectRatio: 1,
          margin: 'auto',
          marginLeft: '5%',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Image src={imageUrl} alt={title} layout='fill' />
      </motion.div>
      <motion.div
        style={{ marginTop: '9%', textAlign: 'left', paddingLeft: '2%', width: '40%' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: size === 'default' ? 0 : 1, scale: size === 'default' ? 0.6 : 1 }}
        exit={{ opacity: size === 'default' ? 0 : 1, scale: size === 'default' ? 0.6 : 1 }}
      >
        <motion.p
          style={{ color: 'gray', font: 'system-ui', marginBottom: 0, lineHeight: 0.6 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: size === 'default' ? 0 : 1, scale: size === 'default' ? 0.6 : 1 }}
        >
          mobile
        </motion.p>
        <motion.h2
          style={{ color: 'white', font: 'system-ui', whiteSpace: 'nowrap', marginTop: 0, fontSize: '120%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: size === 'default' ? 0 : 1, scale: size === 'default' ? 0.6 : 1 }}
        >
          Sunghyun Cho
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        animate={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        exit={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        style={{
          height: '60%',
          aspectRatio: 1,
          margin: 'auto',
          backgroundColor: 'red',
          borderRadius: '50%',
        }}
      >
        <motion.div style={{ position: 'relative', height: '60%', aspectRatio: 1, margin: '20%' }}>
          <Image src={phoneDownFill} alt={title} layout='fill' />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        animate={{
          opacity: size === 'default' ? 0 : 1,
          filter: size === 'default' ? 'blur(10px)' : 'blur(0px)',
          scale: size === 'default' ? 0 : 1,
        }}
        exit={{ filter: 'blur(10px)' }}
        style={{
          position: 'relative',
          height: '60%',
          aspectRatio: 1,
          margin: 'auto',
          marginRight: '4%',
          backgroundColor: 'green',
          borderRadius: '50%',
        }}
      >
        <motion.div style={{ position: 'relative', height: '60%', aspectRatio: 1, margin: '20%' }}>
          <Image src={phoneFill} layout='fill' alt={title} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default DynamicIslandPhoneCall
