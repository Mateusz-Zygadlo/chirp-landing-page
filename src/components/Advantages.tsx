import React from 'react'
import { ADVANTAGES_CONTENT } from '../data'
import { Card } from '../components'

export const Advantages = () => {
  const { header, advantages } = ADVANTAGES_CONTENT
  
  return(
    <div className="md:px-16 lg:px-24 my-14 px-5">
      <h1 className="text-5xl font-extrabold lg:w-[35rem] mb-5">{header}</h1>
      <div className="responsiveGrid">
        {advantages.map((card, index: number) => (
          <Card 
            key={index}
            image={card.image}
            header={card.header}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  )
}