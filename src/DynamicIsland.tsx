// See https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities
import { DynamicIslandSize } from '../types'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'
import { AnimatePresence, motion } from 'framer-motion'
import { useWillChange } from 'framer-motion'

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
  const willChange = useWillChange()
  const { state, children, id } = props
  return (
    <div className='grid w-full h-full bg-transparent place-items-center'>
      <motion.button
        id={id}
        className='items-center justify-center w-0 h-0 mx-auto text-center text-white transition duration-300 ease-in-out bg-black hover:shadow-lg'
        animate={{
          width: min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          height: DynamicIslandSizePresets[state ?? initialState].aspectRatio * min(DynamicIslandSizePresets[state ?? initialState].width, maxWidth),
          borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
          transition: { type: 'spring', stiffness: 400, damping: 40 },
          clipPath: `none`,
          transitionEnd: {
            clipPath: `url(#squircle-${state ?? initialState})`,
          },
        }}
        style={{ willChange }}
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
