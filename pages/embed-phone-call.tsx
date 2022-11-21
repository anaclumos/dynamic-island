import Script from 'next/script'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandPhoneCall } from '../src/PhoneCall'
import Squircle from '../src/Squircle'
import { DynamicIslandSize } from '../types'

const useIntersection = (element: React.MutableRefObject<HTMLElement | null>, rootMargin = '0px') => {
  const [isVisible, setState] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )
    element.current && observer.observe(element.current)
    let current = element.current
    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [element, rootMargin])

  return isVisible
}
const PhoneCall = () => {
  const [phoneCall, setPhoneCall] = useState<DynamicIslandSize>('default')
  const ref = useRef(null)
  const inViewport = useIntersection(ref, '0px')

  useEffect(() => {
    if (inViewport) {
      setTimeout(() => {
        setPhoneCall('large')
      }, 1000)
    } else {
      setPhoneCall('default')
    }
  }, [inViewport])

  return (
    <>
      <div className='py-2' ref={ref}>
        <Script src='/static/iframe-resizer.js' />
        <DynamicIsland
          id='music-player'
          default='default'
          state={phoneCall}
          setState={setPhoneCall}
          onClick={phoneCall === 'default' ? () => setPhoneCall('large') : () => setPhoneCall('default')}
        >
          <DynamicIslandPhoneCall size={phoneCall} />
        </DynamicIsland>

        <div className={phoneCall === 'default' ? '' : 'hidden'}>
          <Squircle size='default' />
        </div>
        <div className={phoneCall === 'large' ? '' : 'hidden'}>
          <Squircle size='large' />
        </div>
      </div>
    </>
  )
}

export default PhoneCall
