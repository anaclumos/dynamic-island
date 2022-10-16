import { DynamicIslandState } from '../types'

type DynamicIslandConfig = {
  state: DynamicIslandState
}

const DynamicIsland = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-64 p-6 mx-auto my-6 text-center bg-black text-white rounded-full shadow-lg'>
        hello
      </div>
    </div>
  )
}

export default DynamicIsland
