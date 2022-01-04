import React, { useEffect } from 'react'

export const useScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  useEffect(() => {
    scrollToTop()
  }, [])
}