import React from 'react'
import { PRICING_CONTENT } from '../data'
import { PricingCard } from '../components'

export const Pricing = () => {
  const { header, paragraph, offers } = PRICING_CONTENT
  
  return(
    <div id="pricing" className="md:px-16 lg:px-24 my-14 px-5 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold">{header}</h1>
      <p className="text-lg mt-3">{paragraph}</p>
      <div className="mt-6">
        {offers.map((offer, index: number) => (
          <PricingCard 
            key={index}
            term={offer.term}
            price={offer.price}
            shortTerm={offer.shortTerm}
            advantages={offer.advantages}
            button={offer.button}
          />
        ))}
      </div>
    </div>
  )
}