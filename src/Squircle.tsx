import React from 'react'
import { DynamicIslandSize } from '../types'
import { getSvgPath } from 'figma-squircle'

const svgPath = getSvgPath({
  width: 1,
  height: 1,
  cornerRadius: 0.3, // defaults to 0
  cornerSmoothing: 0.8, // cornerSmoothing goes from 0 to 1
})

const Squircle = ({ size }: { size: DynamicIslandSize }) => {
  return (
    <svg width={1} height={1} viewBox={`0 0 1 1`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <clipPath id={`squircle-${size}`} clipPathUnits='objectBoundingBox'>
        <path fill='red' stroke='none' d={svgPath} />
      </clipPath>
    </svg>
  )
}

export default Squircle
