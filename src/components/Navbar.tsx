import React, { 
  useState,
  useEffect,
} from 'react'
import { NAVBAR_CONTENT } from '../data'
import { TABLET_WIDTH } from '../constanst'
import {  
  useWindowSize,
  useMeasure,
} from '../hooks'
import { Images } from '../assets'
import { Button } from '../components'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { logo, links, button } = NAVBAR_CONTENT
  const { width, setWidth } = useWindowSize()
  const { rect, myRef }: any = useMeasure()
  const scrollToTop = (e: any, name: string) => {
    if(name != '#home') return;
    e.preventDefault()

    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="px-5 md:px-16 lg:px-24 bg-main py-4 sticky top-0 w-full z-50"
      ref={myRef}
    >
      <div className="flex justify-between relative">
        <h1 className="text-2xl text-blue font-semibold italic cursor-default">{logo}</h1>
        {width > TABLET_WIDTH ? (
          <div className="flex">
            <div className="flex mx-5 items-center">
              {links.map((link: any, index: number) => (
                <a
                  {...link}
                  onClick={(e) => scrollToTop(e, link.href)}
                  key={index} 
                  className="mx-3 border-b cursor-default hover:border-black duration-500"
                >{link.title}</a>
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
          <div className="absolute -right-1 bg-white border p-2 top-0">
            <img 
              src={Images.Close} 
              alt="close" 
              className="scale-125 absolute top-3 right-3 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <div className="w-full mb-3 display: flex flex-col justify-center items-center">
              {links.map((link: any, index: number) => (
                <a 
                  {...link}
                  key={index}
                  onClick={(e) => {
                    scrollToTop(e, link.href);
                    setIsOpen(false)
                  }} 
                  className="my-2 w-full mx-auto cursor-pointer text-2xl flex justify-center items-center hover:underline hover:decoration-dashed"
                >{link.title}</a>
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
    </div>
  )
}