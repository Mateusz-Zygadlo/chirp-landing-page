import React, {
  useState,
  useEffect,
} from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    setWidth(rect: number){
      setWindowSize({...windowSize, width: rect})
    }
  })

  useEffect(() => {
    const resizeWindow = () => setWindowSize({...windowSize, width: window.innerWidth})
    window.addEventListener('resize', resizeWindow)

    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  return windowSize;
}