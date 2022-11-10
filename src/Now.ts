import { AppleMusicData } from '../types/AppleMusicData'

export const NowPlaying = async (): Promise<AppleMusicData> => {
  const data = await fetch('https://raw.githubusercontent.com/anaclumos/now-playing/main/now-playing.json').then((res) => res.json())
  return data
}
