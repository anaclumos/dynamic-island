import { useEffect, useState } from 'react'

export const useIntersection = (element: React.MutableRefObject<HTMLElement | null>, rootMargin = '0px') => {
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
