import React from 'react'

interface CardProps {
  image: string,
  header: String,
  paragraph: String,
}

export const Card: React.FC<CardProps> = ({
  image,
  header,
  paragraph,
}) => {
  return(
    <div className="bg-gray m-2 p-4 border">
      <img src={image} alt="Checkmark" />
      <h1 className="text-xl font-semibold my-2">{header}</h1>
      <p>{paragraph}</p>
    </div>
  )
}