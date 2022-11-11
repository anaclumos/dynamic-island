// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities
import { DynamicIslandSize } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { AnimatePresence, motion } from 'framer-motion'

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

const maxWidth = 371

type Props = {
  state: DynamicIslandSize
  setState: (state: DynamicIslandSize) => void
  default: DynamicIslandSize
  onHover?: () => void
  onLeave?: () => void
  onClick?: () => void
  children: React.ReactNode
  id?: string
}

const min = (a: number, b: number) => (a < b ? a : b)

const DynamicIsland = (props: Props) => {
  const { state, children, id } = props
  return (
    <div className='grid w-full h-full place-items-center'>
      <motion.button
        id={id}
        className='items-center justify-center mx-auto text-center text-white transition duration-300 ease-in-out bg-black hover:shadow-lg hover:scale-105'
        animate={{
          width: min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          height: DynamicIslandSizePresets[state ?? initialState].heightRatio * min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
          transition: { type: 'spring', stiffness: 400, damping: 40 },
        }}
        onClick={props.onClick}
        onHoverStart={props.onHover}
        onHoverEnd={props.onLeave}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </motion.button>
    </div>
  )
}

export default DynamicIsland
