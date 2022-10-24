export type DynamicIslandSize =
  | 'compactBothSides'
  | 'compactLeading'
  | 'compactTrailing'
  | 'default'
  | 'large'
  | 'long'
  | 'ultra'

export type DynamicIslandState = {
  size: DynamicIslandSize
  imageUrl: string
  title: string
  description: string
}
