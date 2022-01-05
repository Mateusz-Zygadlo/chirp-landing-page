import React from 'react'
import { Images } from '../assets'
import { LOGO_NAME } from '../data'

export const Footer = () => {
  return(
    <div className="md:px-16 lg:px-24 p-5 bg-cyan flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl text-blue font-semibold italic cursor-default mb-3 sm:mb-0">{LOGO_NAME}</h1>
      <div className="flex w-80">
        <div className="flex justify-around w-40 items-center">
          <img 
            src={Images.TwitterBlack}
            alt="black twitter"
          />
          <p className="ml-3 w-full text-lg">Privacy Policy</p>
        </div>
        <p className="ml-5 text-lg">Terms of Use</p>
      </div>
    </div>
  )
}