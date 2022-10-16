import Image from 'next/image'

export type DynamicIslandSize = 'compactLeading' | 'compactTrailing' | 'default' | 'expanded' | 'xlarge' | 'ultra'

export type DynamicIslandState = {
  size: DynamicIslandSize
  imageUrl: string
  title: string
  description: string
}
