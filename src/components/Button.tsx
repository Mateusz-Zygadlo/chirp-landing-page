import React from 'react'

interface ButtonProps {
  blue?: boolean;
  reverse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ blue, reverse, children }) => {
  return(
    <button className={`${reverse ? 'text-white bg-black' : blue ? 'bg-blue text-white' : null} rounded-md font-bold px-4 py-3 border flex items-center`}>
      {children}
    </button>
  )
}