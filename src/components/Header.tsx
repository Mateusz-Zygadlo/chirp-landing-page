import React, { useEffect } from 'react'
import {  
  useWindowSize,
  useMeasure,
} from '../hooks'
import {  
  TABLET_WIDTH,
  MOBILE_WIDTH,
} from '../constanst'
import { HEADER_CONTENT } from '../data'
import { Images } from '../assets'
import {  
  Button,
} from '../components'

export const Header = () => {
  const { header, paragraph, button, about, usersWhoSignedUp, textBelowUsers } = HEADER_CONTENT
  const { width, setWidth } = useWindowSize()
  const { rect, myRef }: any = useMeasure()
  
  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      ref={myRef}
      id="home"
      className="w-full h-full bg-main pt-5"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between py-5 p-5 md:px-16 lg:px-24">
        <div className="flex flex-col justify-center mt-5 lg:mt-0 lg:w-[40rem] px-5">
          <h1 className="text-4xl lg:text-6xl w-9/12 lg:w-full font-extrabold">{header}</h1>
          <p className="my-3 text-xl w-11/12 lg:w-full">{paragraph}</p>
          <div className={`flex flex-col sm:flex-row items-center`}>
            <Button blue>
              <>
                <img src={button.logo} alt={button.content} />
                <p className="ml-3">{button.content}</p>
              </>
            </Button>
            <p className="ml-5 mt-3 sm:mt-0 text-blue cursor-pointer hover:underline hover:decoration-dashed">{about}</p>
          </div>
          <div className="flex ml-5 my-5">
            {usersWhoSignedUp.map((user, index: number) => (
              <img 
                key={index}
                src={user} 
                alt="user who signed up" 
                className="-ml-5"
              />
            ))}
          </div>
          <p className="text-lg font-semibold">{textBelowUsers}</p>
        </div>
        {width > TABLET_WIDTH ? (
          <img 
            src={Images.HeroImageDesktop}
            alt="Twitter stats" 
            className="w-96"
          />
        ) : width > MOBILE_WIDTH ? (
          <img 
            src={Images.HeroImageMobile}
            alt="Twitter stats" 
            className="lg:w-96"
          />
        ) : (
          <img 
            src={Images.HeroImageDesktop}
            alt="Twitter stats" 
          />
        )}
      </div>
    </div>
  )
}