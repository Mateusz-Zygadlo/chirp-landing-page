import React from 'react'
import { 
  Navbar,
  Header,
  Advantages,
  RecommendedTweets,
  Pricing,
  Footer,
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <Header />
      <Advantages />
      <RecommendedTweets />
      <Pricing />
      <Footer />
    </div>
  )
}