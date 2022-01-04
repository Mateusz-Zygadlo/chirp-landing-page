import React from 'react'
import { Button } from '../components'
import { Images } from '../assets'

interface PricingCardProps {
  term: string;
  shortTerm: string;
  price: string;
  advantages: any[];
  button: any;
}

export const PricingCard: React.FC<PricingCardProps>= ({  
  term,
  shortTerm,
  price,
  advantages,
  button,
}) => {
  return(
    <div className="py-3 px-5 border rounded-md">
      <h2 className="text-xl text-gray-700">{term}</h2>
      <div className="flex items-end pb-5 border-b">
        <h1 className="text-4xl font-semibold">{price}</h1>
        <p className="text-gray-500">{shortTerm}</p>
      </div>
      <div className="my-3 flex flex-col pb-5 border-b">
        {advantages.map((card, index: number) => (
          <div
            key={index}
            className="flex my-2"
          >
            <img 
              src={card.image}
              alt="pricing advantages" 
            />
            <p className="ml-3 w-10/12">{card.paragraph}</p>
          </div>
        ))}
      </div>
      <Button blue>
        <>
          <img src={Images.Twitter} alt="twitter logo" />
          <p className="ml-3">{button}</p>
        </>
      </Button>
    </div>
  )
}