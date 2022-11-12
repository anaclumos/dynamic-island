import React from 'react'
import { DynamicIslandSize } from '../types'
import { getSvgPath } from 'figma-squircle'
import { DynamicIslandSizePresets } from './DynamicIslandSizePresets'

const Squircle = ({ size }: { size: DynamicIslandSize }) => {
  const width = DynamicIslandSizePresets[size].width
  const height = DynamicIslandSizePresets[size].aspectRatio * width
  const cornerRadius = DynamicIslandSizePresets[size].borderRadius

  const svgPath = getSvgPath({
    width: width,
    height: height,
    cornerRadius: cornerRadius,
    cornerSmoothing: 0.6,
  })
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <clipPath id={`squircle-${size}`}>
        <path fill='red' stroke='none' d={svgPath} />
      </clipPath>
    </svg>
  )
}

export default Squircle
