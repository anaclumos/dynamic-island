export type DynamicIslandSize = 'compact' | 'minimalLeading' | 'minimalTrailing' | 'default' | 'large' | 'long' | 'ultra'

export type DynamicIslandState = {
  size: DynamicIslandSize
  imageUrl: string
  title: string
  description: string
}
