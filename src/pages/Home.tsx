import React from 'react'
import { Navbar } from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()

  return(
    <div className="px-5 md:px-16 lg:px-24">
      <Navbar />
      <h1 className="text-5xl">Home page</h1>
    </div>
  )
}