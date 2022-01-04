import React, { 
  useState,
  useEffect,
} from 'react'
import { NAVBAR_CONTENT } from '../data'
import { MOBILE_WIDTH } from '../constanst'
import {  
  useWindowSize,
  useMeasure
} from '../hooks'
import { Images } from '../assets'
import { Button } from '../components'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { logo, links, button } = NAVBAR_CONTENT
  const { width, setWidth } = useWindowSize()
  const { rect, myRef }: any = useMeasure()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      ref={myRef}
      className="flex justify-between py-8 relative"
    >
      <h1 className="text-2xl text-blue font-semibold italic cursor-default">{logo}</h1>
      {width > MOBILE_WIDTH ? (
        <div className="flex">
          <div className="flex mx-5 items-center">
            {links.map((link: any, index: number) => (
              <p 
                key={index} 
                className="mx-3 border-b cursor-default hover:border-black duration-500"
              >{link.name}</p>
            ))}
          </div>
          <Button blue>
            <>
              <img src={button.logo} alt={button.content} />
              <p className="ml-3">{button.content}</p>
            </>
          </Button>
        </div>
      ) : isOpen ? (
        <div className="absolute -right-1 bg-white border p-2">
          <img 
            src={Images.Close} 
            alt="close" 
            className="scale-125 absolute top-3 right-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <div className="w-full mb-3 display: flex flex-col justify-center items-center">
            {links.map((link: any, index: number) => (
              <p 
                key={index} 
                className="my-2 w-full mx-auto cursor-pointer text-2xl flex justify-center items-center hover:underline hover:decoration-dashed"
              >{link.name}</p>
            ))}
          </div>
          <div className="scale-90">
            <Button blue>
              <>
                <img src={button.logo} alt={button.content} />
                <p className="ml-3">{button.content}</p>
              </>
            </Button>
          </div>
        </div>
      ) : <img 
            src={Images.HamburgerMenu} 
            alt="Hamburger Menu" 
            className="scale-75 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
      }
    </div>
  )
}